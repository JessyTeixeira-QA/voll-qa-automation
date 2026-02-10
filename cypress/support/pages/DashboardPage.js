class DashboardPage {
    // Selectors
    elements = {
        addSpecialistButton: () => cy.contains('Cadastrar especialista'),
        insuranceCheckbox: () => cy.get('[type="checkbox"]').first(),
        insuranceOptions: () => cy.get('.MuiFormGroup-root').children(),
        logoutButton: () => cy.get('[data-test="logout-button"]'), // Hypothetical
    }

    // Actions
    visit() {
        cy.visit('/dashboard');
        return this;
    }

    openSpecialistModal() {
        this.elements.addSpecialistButton().should('be.visible').click();
        return this;
    }

    toggleInsurance() {
        this.elements.insuranceCheckbox().check();
        return this;
    }

    selectPlans(plans) {
        cy.get('[type="checkbox"]').check(plans);
        return this;
    }

    verifyDashboardLoaded() {
        cy.url().should('include', '/dashboard');
        return this;
    }
}

export default new DashboardPage();
