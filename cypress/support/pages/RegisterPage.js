/**
 * Classe que representa a página de cadastro
 */
class PaginaCadastro {
    // Seletores
    elementos = {
        /**
         * Seleciona o campo de nome
         */
        campoNome: () => cy.get('[data-test="inputNome"]'),

        /**
         * Seleciona o campo de CNPJ
         */
        campoCnpj: () => cy.get('[data-test="inputCNPJ"]'),

        /**
         * Seleciona o campo de e-mail
         */
        campoEmail: () => cy.get('[data-test="inputEmail"]'),

        /**
         * Seleciona o campo de senha
         */
        campoSenha: () => cy.get('[data-test="inputSenha"]'),

        /**
         * Seleciona o campo de confirmação de senha
         */
        campoConfirmarSenha: () => cy.get('[data-test="inputSenhaVerificada"]'),

        /**
         * Seleciona o botão para avançar para o próximo passo
         */
        botaoAvancar: () => cy.get('.sc-bcXHqe'), // Passo 1 para Passo 2
        
        /**
         * Seleciona o campo de telefone
         */
        campoTelefone: () => cy.get('[data-test="inputTelefone"]'),

        /**
         * Seleciona o campo de CEP
         */
        campoCep: () => cy.get('[data-test="inputCEP"]'),

        /**
         * Seleciona o campo de rua
         */
        campoRua: () => cy.get('[data-test="inputRua"]'),

        /**
         * Seleciona o campo de número
         */
        campoNumero: () => cy.get('[data-test="inputNumero"]'),

        /**
         * Seleciona o campo de complemento
         */
        campoComplemento: () => cy.get('[data-test="inputComplemento"]'),

        /**
         * Seleciona o campo de estado
         */
        campoEstado: () => cy.get('[data-test="inputEstado"]'),

        /**
         * Seleciona o botão para finalizar o cadastro
         */
        botaoFinalizarCadastro: () => cy.contains('button', 'Cadastrar')
    }

    /**
     * Acessa a página de cadastro
     */
    acessar() {
        cy.visit('/cadastro');
        return this;
    }

    /**
     * Preenche o passo 1 com os dados de nome, CNPJ, e-mail e senha
     * @param {string} nome Nome da clínica
     * @param {string} cnpj CNPJ da clínica
     * @param {string} email E-mail da clínica
     * @param {string} senha Senha da clínica
     */
    preencherPasso1(nome, cnpj, email, senha) {
        this.elementos.campoNome().type(nome);
        this.elementos.campoCnpj().type(cnpj);
        this.elementos.campoEmail().type(email);
        this.elementos.campoSenha().type(senha);
        this.elementos.campoConfirmarSenha().type(senha);
        return this;
    }

    /**
     * Clica no botão para avançar para o próximo passo
     */
    irParaPasso2() {
        this.elementos.botaoAvancar().click();
        return this;
    }

    /**
     * Preenche o passo 2 com os dados de telefone, CEP, rua, número, complemento e estado
     * @param {object} detalhes Dados de telefone, CEP, rua, número, complemento e estado
     */
    preencherPasso2(detalhes) {
        this.elementos.campoTelefone().type(detalhes.telefone);
        this.elementos.campoCep().type(detalhes.cep);
        this.elementos.campoRua().type(detalhes.rua);
        this.elementos.campoNumero().type(detalhes.numero);
        this.elementos.campoComplemento().type(detalhes.complemento);
        this.elementos.campoEstado().type(detalhes.estado);
        return this;
    }

    /**
     * Clica no botão para finalizar o cadastro
     */
    finalizar() {
        this.elementos.botaoFinalizarCadastro().click();
    }
}

export default new PaginaCadastro();
