import PaginaDashboard from '../support/pages/DashboardPage';

describe('Dashboard Management', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'));
        PaginaDashboard.acessar();
    });

    context('Specialist Registration Modal', () => {
        it('should verify the initial state of the insurance checkbox', () => {
            PaginaDashboard.abrirModalEspecialista();
            PaginaDashboard.elementos.checkboxPlanoSaude()
                .should('have.attr', 'aria-label', 'Atende por plano?')
                .and('not.be.checked');
        });

        it('should allow selecting multiple insurance plans', () => {
            const planosAlvo = ['Sulamerica', 'Unimed', 'Bradesco'];
            
            PaginaDashboard.abrirModalEspecialista()
                           .ativarPlanosSaude()
                           .selecionarPlanos(planosAlvo);
            
            planosAlvo.forEach(plano => {
                cy.get(`[value="${plano}"]`).should('be.checked');
            });
        });

        it('should ensure all insurance options are visible and interactable', () => {
            PaginaDashboard.abrirModalEspecialista()
                           .ativarPlanosSaude();
            
            PaginaDashboard.elementos.opcoesPlanoSaude().each(($el) => {
                cy.wrap($el).should('be.visible');
            });
        });
    });
});
