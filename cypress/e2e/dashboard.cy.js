import DashboardPage from '../support/pages/DashboardPage';

describe('Dashboard Management', () => {
    beforeEach(() => {
        // Log in once per suite using session persistence for speed
        cy.login(Cypress.env('email'), Cypress.env('senha'));
        DashboardPage.visit();
    });

    context('Specialist Registration Modal', () => {
        it('should verify the initial state of the insurance checkbox', () => {
            DashboardPage.openSpecialistModal();
            DashboardPage.elements.insuranceCheckbox()
                .should('have.attr', 'aria-label', 'Atende por plano?')
                .and('not.be.checked');
        });

        it('should allow selecting multiple insurance plans', () => {
            const targetPlans = ['Sulamerica', 'Unimed', 'Bradesco'];
            
            DashboardPage.openSpecialistModal()
                         .toggleInsurance()
                         .selectPlans(targetPlans);
            
            targetPlans.forEach(plan => {
                cy.get(`[value="${plan}"]`).should('be.checked');
            });
        });

        it('should ensure all insurance options are visible and interactable', () => {
            DashboardPage.openSpecialistModal()
                         .toggleInsurance();
            
            DashboardPage.elements.insuranceOptions().each(($el) => {
                cy.wrap($el).should('be.visible');
            });
        });
    });
});
