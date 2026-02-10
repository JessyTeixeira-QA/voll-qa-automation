class LoginPage {
    visit() {
        cy.visit('/login');
    }

    fillEmail(email) {
        cy.get('[data-test="inputLoginEmail"]').type(email);
    }

    fillPassword(password) {
        cy.get('[data-test="inputLoginSenha"]').type(password, { log: false });
    }

    submit() {
        cy.get('[data-test="botaoTeste"]').should('be.visible').click();
    }

    login(email, password) {
        this.visit();
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
    }
}

export default new LoginPage();
