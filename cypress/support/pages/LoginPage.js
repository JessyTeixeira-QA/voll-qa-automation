class LoginPage {
    // Selectors
    elements = {
        emailInput: () => cy.get('[data-test="inputLoginEmail"]'),
        passwordInput: () => cy.get('[data-test="inputLoginSenha"]'),
        submitButton: () => cy.get('[data-test="botaoTeste"]'),
        errorMessage: () => cy.get('.error-message'), // Hypothetical, adjust if needed
    }

    // Actions
    visit() {
        cy.visit('/login');
        return this;
    }

    fillEmail(email) {
        this.elements.emailInput().should('be.visible').type(email);
        return this;
    }

    fillPassword(password) {
        this.elements.passwordInput().should('be.visible').type(password, { log: false });
        return this;
    }

    submit() {
        this.elements.submitButton().should('be.enabled').click();
    }

    // High-level flow
    login(email, password) {
        this.visit();
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
    }
}

export default new LoginPage();
