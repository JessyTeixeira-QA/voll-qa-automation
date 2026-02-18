class PaginaDashboard {
    // Seletores de elementos da página
    elementos = {
        botaoAdicionarEspecialista: () => cy.contains('Cadastrar especialista'),
        checkboxPlanoSaude: () => cy.get('[type="checkbox"]').first(),
        opcoesPlanoSaude: () => cy.get('.MuiFormGroup-root').children(),
    }

    // Ações executadas na página
    
    // Navega até a URL do dashboard
    acessar() {
        cy.visit('/dashboard');
        return this;
    }

    // Clica no botão para abrir o modal de cadastro de novo especialista
    abrirModalEspecialista() {
        this.elementos.botaoAdicionarEspecialista().should('be.visible').click();
        return this;
    }

    // Marca o checkbox principal de planos de saúde
    ativarPlanosSaude() {
        this.elementos.checkboxPlanoSaude().check();
        return this;
    }

    // Seleciona múltiplos planos de saúde baseados em um array de valores
    selecionarPlanos(planos) {
        cy.get('[type="checkbox"]').check(planos);
        return this;
    }

    // Verifica se a URL atual contém o caminho esperado do dashboard
    validarCarregamento() {
        cy.url().should('include', '/dashboard');
        return this;
    }
}

export default new PaginaDashboard();
