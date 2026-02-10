import LoginPage from '../support/pages/LoginPage';
import DashboardPage from '../support/pages/DashboardPage';

describe('Authentication Flow - Clinic', () => {
    const email = Cypress.env('email');
    const password = Cypress.env('senha');

    beforeEach(() => {
        LoginPage.visit();
    });

    it('should successfully login with valid credentials', () => {
        LoginPage.fillEmail(email)
                 .fillPassword(password)
                 .submit();
        
        DashboardPage.verifyDashboardLoaded();
    });

    it('should maintain session using custom login command', () => {
        // Professional use of session persistence
        cy.login(email, password);
        DashboardPage.visit()
                     .verifyDashboardLoaded();
    });
});
