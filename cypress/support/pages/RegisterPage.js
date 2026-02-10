class RegisterPage {
    visit() {
        cy.visit('/cadastro');
    }

    fillStep1(name, cnpj, email, password) {
        cy.get('[data-test="inputNome"]').type(name);
        cy.get('[data-test="inputCNPJ"]').type(cnpj);
        cy.get('[data-test="inputEmail"]').type(email);
        cy.get('[data-test="inputSenha"]').type(password);
        cy.get('[data-test="inputSenhaVerificada"]').type(password);
    }

    goToStep2() {
        cy.get('.sc-bcXHqe').click();
    }

    fillStep2(phone, cep, street, number, complement, state) {
        cy.get('[data-test="inputTelefone"]').type(phone);
        cy.get('[data-test="inputCEP"]').type(cep);
        cy.get('[data-test="inputRua"]').type(street);
        cy.get('[data-test="inputNumero"]').type(number);
        cy.get('[data-test="inputComplemento"]').type(complement);
        cy.get('[data-test="inputEstado"]').type(state);
    }

    submit() {
        cy.contains('Cadastrar').click();
    }
}

export default new RegisterPage();
