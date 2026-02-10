class PaginaLogin {
    // Seletores
    elementos = {
        campoEmail: () => cy.get('[data-test="inputLoginEmail"]'),
        campoSenha: () => cy.get('[data-test="inputLoginSenha"]'),
        botaoEntrar: () => cy.get('[data-test="botaoTeste"]'),
    }

    // Ações
    acessar() {
        cy.visit('/login');
        return this;
    }

    preencherEmail(email) {
        this.elementos.campoEmail().should('be.visible').type(email);
        return this;
    }

    preencherSenha(senha) {
        this.elementos.campoSenha().should('be.visible').type(senha, { log: false });
        return this;
    }

    enviar() {
        this.elementos.botaoEntrar().should('be.enabled').click();
    }

    // Fluxo de alto nível
    realizarLogin(email, senha) {
        this.acessar();
        this.preencherEmail(email);
        this.preencherSenha(senha);
        this.enviar();
    }
}

export default new PaginaLogin();
