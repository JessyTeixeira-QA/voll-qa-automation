/**
 * Classe responsável por realizar ações na página de login
 */
class PaginaLogin {
    /**
     * Seletores da página de login
     */
    elementos = {
        /**
         * Campo de e-mail
         */
        campoEmail: () => cy.get('[data-test="inputLoginEmail"]'),

        /**
         * Campo de senha
         */
        campoSenha: () => cy.get('[data-test="inputLoginSenha"]'),

        /**
         * Botão de entrar
         */
        botaoEntrar: () => cy.get('[data-test="botaoTeste"]'),
    }

    /**
     * Acessa a página de login
     */
    acessar() {
        cy.visit('/login');
        return this;
    }

    /**
     * Preenche o campo de e-mail com um valor
     * @param {string} email - Valor a ser preenchido no campo de e-mail
     */
    preencherEmail(email) {
        this.elementos.campoEmail().should('be.visible').type(email);
        return this;
    }

    /**
     * Preenche o campo de senha com um valor
     * @param {string} senha - Valor a ser preenchido no campo de senha
     */
    preencherSenha(senha) {
        this.elementos.campoSenha().should('be.visible').type(senha, { log: false });
        return this;
    }

    /**
     * Clica a botão de entrar
     */
    enviar() {
        this.elementos.botaoEntrar().should('be.enabled').click();
    }

    /**
     * Fluxo de alto nível para realizar o login
     * @param {string} email - Valor a ser preenchido no campo de e-mail
     * @param {string} senha - Valor a ser preenchido no campo de senha
     */
    realizarLogin(email, senha) {
        this.acessar();
        this.preencherEmail(email);
        this.preencherSenha(senha);
        this.enviar();
    }
}

export default new PaginaLogin();
