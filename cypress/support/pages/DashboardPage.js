class DashboardPage {
    visit() {
        cy.visit('/dashboard');
    }

    openSpecialistModal() {
        cy.contains('Cadastrar especialista').should('be.visible').click();
    }

    checkInsuranceBox() {
        cy.get('[type="checkbox"]').first().check();
    }

    selectInsurances(insurances) {
        cy.get('[type="checkbox"]').check(insurances);
    }

    getInsuranceCheckboxes() {
        return cy.get('.MuiFormGroup-root').children();
    }
}

export default new DashboardPage();
