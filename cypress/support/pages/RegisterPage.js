class PaginaCadastro {
    // Seletores
    elementos = {
        campoNome: () => cy.get('[data-test="inputNome"]'),
        campoCnpj: () => cy.get('[data-test="inputCNPJ"]'),
        campoEmail: () => cy.get('[data-test="inputEmail"]'),
        campoSenha: () => cy.get('[data-test="inputSenha"]'),
        campoConfirmarSenha: () => cy.get('[data-test="inputSenhaVerificada"]'),
        botaoAvancar: () => cy.get('.sc-bcXHqe'), // Passo 1 para Passo 2
        
        campoTelefone: () => cy.get('[data-test="inputTelefone"]'),
        campoCep: () => cy.get('[data-test="inputCEP"]'),
        campoRua: () => cy.get('[data-test="inputRua"]'),
        campoNumero: () => cy.get('[data-test="inputNumero"]'),
        campoComplemento: () => cy.get('[data-test="inputComplemento"]'),
        campoEstado: () => cy.get('[data-test="inputEstado"]'),
        botaoFinalizarCadastro: () => cy.contains('button', 'Cadastrar')
    }

    // Ações
    acessar() {
        cy.visit('/cadastro');
        return this;
    }

    preencherPasso1(nome, cnpj, email, senha) {
        this.elementos.campoNome().type(nome);
        this.elementos.campoCnpj().type(cnpj);
        this.elementos.campoEmail().type(email);
        this.elementos.campoSenha().type(senha);
        this.elementos.campoConfirmarSenha().type(senha);
        return this;
    }

    irParaPasso2() {
        this.elementos.botaoAvancar().click();
        return this;
    }

    preencherPasso2(detalhes) {
        this.elementos.campoTelefone().type(detalhes.telefone);
        this.elementos.campoCep().type(detalhes.cep);
        this.elementos.campoRua().type(detalhes.rua);
        this.elementos.campoNumero().type(detalhes.numero);
        this.elementos.campoComplemento().type(detalhes.complemento);
        this.elementos.campoEstado().type(detalhes.estado);
        return this;
    }

    finalizar() {
        this.elementos.botaoFinalizarCadastro().click();
    }
}

export default new PaginaCadastro();
