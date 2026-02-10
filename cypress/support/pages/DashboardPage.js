class PaginaDashboard {
    // Seletores
    elementos = {
        botaoAdicionarEspecialista: () => cy.contains('Cadastrar especialista'),
        checkboxPlanoSaude: () => cy.get('[type="checkbox"]').first(),
        opcoesPlanoSaude: () => cy.get('.MuiFormGroup-root').children(),
    }

    // Ações
    acessar() {
        cy.visit('/dashboard');
        return this;
    }

    abrirModalEspecialista() {
        this.elementos.botaoAdicionarEspecialista().should('be.visible').click();
        return this;
    }

    ativarPlanosSaude() {
        this.elementos.checkboxPlanoSaude().check();
        return this;
    }

    selecionarPlanos(planos) {
        cy.get('[type="checkbox"]').check(planos);
        return this;
    }

    validarCarregamento() {
        cy.url().should('include', '/dashboard');
        return this;
    }
}

export default new PaginaDashboard();
