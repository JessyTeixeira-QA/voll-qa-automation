import { fakerPT_BR as faker } from '@faker-js/faker';
import PaginaCadastro from '../support/pages/RegisterPage';
import PaginaLogin from '../support/pages/LoginPage';

describe('Clinic Registration Flow', () => {
    beforeEach(() => {
        PaginaCadastro.acessar();
    });

    it('should navigate to registration page from home', () => {
        cy.visit('/');
        cy.get('[href="/cadastro"]').click();
        cy.location('pathname').should('equal', '/cadastro');
    });

    it('should validate the multi-step registration process', () => {
        const senha = faker.internet.password({ length: 10 });
        const dadosClinica = {
            nome: faker.company.name(),
            cnpj: faker.string.numeric(14),
            email: faker.internet.email(),
            telefone: faker.phone.number(),
            cep: faker.location.zipCode('########'),
            rua: faker.location.street(),
            numero: faker.location.buildingNumber(),
            complemento: faker.location.secondaryAddress(),
            estado: faker.location.state({ abbreviated: true })
        };

        // Passo 1: Informações Básicas
        PaginaCadastro.preencherPasso1(dadosClinica.nome, dadosClinica.cnpj, dadosClinica.email, senha)
                      .irParaPasso2();
        
        cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible');

        // Passo 2: Informações Técnicas
        PaginaCadastro.preencherPasso2({
            telefone: dadosClinica.telefone,
            cep: dadosClinica.cep,
            rua: dadosClinica.rua,
            numero: dadosClinica.numero,
            complemento: dadosClinica.complemento,
            estado: dadosClinica.estado
        }).finalizar();

        // Verificação
        cy.location('pathname').should('equal', '/login');
    });
});
