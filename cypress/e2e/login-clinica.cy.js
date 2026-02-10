import LoginPage from '../support/pages/LoginPage';

describe('Login Page', () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    it('Should login successfully with valid credentials', () => {
        LoginPage.fillEmail(Cypress.env('email'));
        LoginPage.fillPassword(Cypress.env('senha'));
        LoginPage.submit();
        
        cy.url().should('include', '/dashboard');
    });

    it('Should login using custom command for session persistence', () => {
        cy.login(Cypress.env('email'), Cypress.env('senha'));
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
    });
});
