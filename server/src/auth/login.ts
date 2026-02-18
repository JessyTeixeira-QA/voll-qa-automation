import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { Autenticaveis } from './authEntity.js'

import { AppDataSource } from '../data-source.js'
import { decryptPassword } from '../utils/senhaUtils.js'
import { AppError } from '../error/ErrorHandler.js'

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, senha } = req.body

  const autenticavel = await AppDataSource.manager.findOne(Autenticaveis, {
    select: ['id', 'rota', 'role', 'senha'],
    where: { email }
  })

    if (autenticavel == null) {
      throw new AppError('Não encontrado!', 404)
    } else {
      const { id, rota, role, senha: senhaAuth } = autenticavel
      
      if (!process.env.SECRET_KEY) {
        throw new AppError('Configuração do servidor incompleta (SECRET_KEY ausente).', 500)
      }

      let senhaCorrespondente: string
      try {
        senhaCorrespondente = decryptPassword(senhaAuth)
      } catch (error) {
        console.error('Erro ao descriptografar senha:', error)
        throw new AppError('Erro interno ao processar autenticação.', 500)
      }

      if (senha !== senhaCorrespondente) {
        throw new AppError('Senha incorreta!', 401)
      }

      if (!process.env.SECRET) {
        throw new AppError('Configuração do servidor incompleta (SECRET ausente).', 500)
      }

      const token = jwt.sign({ id, role }, process.env.SECRET, {
        expiresIn: 86400
      }) // expira em 24 horas

    res.status(200).json({
      auth: true,
      token,
      rota
    })
  }
}

export const logout = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({ auth: false, token: null })
}