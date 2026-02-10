import DashboardPage from '../support/pages/DashboardPage';

describe('Dashboard Page', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'));
        DashboardPage.visit();
    });

    context('Navigation and Specialist Registration', () => {
        it('Should verify successful login redirection to dashboard', () => {
            cy.url().should('include', '/dashboard');
        });

        it('Should open the specialist registration modal', () => {
            DashboardPage.openSpecialistModal();
            cy.contains('Cadastrar especialista').should('be.visible');
        });
    });

    context('Specialist Registration Modal', () => {
        it('Should verify insurance checkbox is unchecked by default', () => {
            DashboardPage.openSpecialistModal();
            cy.get('[type="checkbox"]')
                .should('have.attr', 'aria-label', 'Atende por plano?')
                .and('not.be.checked');
        });

        it('Should select insurance plans after checking the main box', () => {
            DashboardPage.openSpecialistModal();
            DashboardPage.checkInsuranceBox();
            
            const plans = ['Sulamerica', 'Unimed', 'Bradesco'];
            DashboardPage.selectInsurances(plans);
            
            plans.forEach(plan => {
                cy.get(`[value="${plan}"]`).should('be.checked');
            });
        });

        it('Should display all insurance options correctly', () => {
            DashboardPage.openSpecialistModal();
            DashboardPage.checkInsuranceBox();
            
            DashboardPage.getInsuranceCheckboxes().each(($checkbox) => {
                cy.wrap($checkbox).should('be.visible');
            });
        });
    });
});
