import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, Relation } from 'typeorm'
import { Paciente } from '../pacientes/pacienteEntity.js'
import { Especialista } from '../especialistas/EspecialistaEntity.js'

@Entity('avaliacoes')
export class Avaliacoes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar") // Force o tipo aqui
    descricao: string;

    @Column("int")     // Force o tipo aqui
    nota: number;

    @Column("int")     // Adicione o tipo para a FK
    especialistaId: number;

    @Column("int")     // Adicione o tipo para a FK
    pacienteId: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Especialista, (especialista) => especialista.avaliacoes)
    especialista: Relation<Especialista>;

    @ManyToOne(() => Paciente, (paciente) => paciente.avaliacoes)
    paciente: Relation<Paciente>;
}
