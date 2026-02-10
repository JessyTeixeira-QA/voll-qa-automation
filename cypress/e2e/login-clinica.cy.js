import PaginaLogin from '../support/pages/LoginPage';
import PaginaDashboard from '../support/pages/DashboardPage';

describe('Authentication Flow - Clinic', () => {
    const email = Cypress.env('email');
    const senha = Cypress.env('senha');

    beforeEach(() => {
        PaginaLogin.acessar();
    });

    it('should successfully login with valid credentials', () => {
        PaginaLogin.preencherEmail(email)
                   .preencherSenha(senha)
                   .enviar();
        
        PaginaDashboard.validarCarregamento();
    });

    it('should maintain session using custom login command', () => {
        cy.login(email, senha);
        PaginaDashboard.acessar()
                       .validarCarregamento();
    });
});
