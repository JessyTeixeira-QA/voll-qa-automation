class RegisterPage {
    // Selectors
    elements = {
        nameInput: () => cy.get('[data-test="inputNome"]'),
        cnpjInput: () => cy.get('[data-test="inputCNPJ"]'),
        emailInput: () => cy.get('[data-test="inputEmail"]'),
        passwordInput: () => cy.get('[data-test="inputSenha"]'),
        confirmPasswordInput: () => cy.get('[data-test="inputSenhaVerificada"]'),
        nextButton: () => cy.get('.sc-bcXHqe'), // Step 1 to Step 2
        
        phoneInput: () => cy.get('[data-test="inputTelefone"]'),
        cepInput: () => cy.get('[data-test="inputCEP"]'),
        streetInput: () => cy.get('[data-test="inputRua"]'),
        numberInput: () => cy.get('[data-test="inputNumero"]'),
        complementInput: () => cy.get('[data-test="inputComplemento"]'),
        stateInput: () => cy.get('[data-test="inputEstado"]'),
        registerButton: () => cy.contains('button', 'Cadastrar')
    }

    // Actions
    visit() {
        cy.visit('/cadastro');
        return this;
    }

    fillStep1(name, cnpj, email, password) {
        this.elements.nameInput().type(name);
        this.elements.cnpjInput().type(cnpj);
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.confirmPasswordInput().type(password);
        return this;
    }

    goToStep2() {
        this.elements.nextButton().click();
        return this;
    }

    fillStep2(details) {
        this.elements.phoneInput().type(details.phone);
        this.elements.cepInput().type(details.cep);
        this.elements.streetInput().type(details.street);
        this.elements.numberInput().type(details.number);
        this.elements.complementInput().type(details.complement);
        this.elements.stateInput().type(details.state);
        return this;
    }

    submit() {
        this.elements.registerButton().click();
    }
}

export default new RegisterPage();
