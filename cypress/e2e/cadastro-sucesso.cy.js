import { fakerPT_BR as faker } from '@faker-js/faker';
import RegisterPage from '../support/pages/RegisterPage';

describe('Registration Page', () => {
    beforeEach(() => {
        RegisterPage.visit();
    });

    it('Should redirect to registration page from home', () => {
        cy.visit('/');
        cy.get('[href="/cadastro"]').click();
        cy.location('pathname').should('equal', '/cadastro');
    });

    it('Should complete first step of registration and show technical data area', () => {
        RegisterPage.fillStep1(
            'Catarina P',
            '12598432',
            'catarina@email.com',
            'Senha123'
        );
        RegisterPage.goToStep2();
        
        cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible');
    });

    it('Should register a clinic successfully', () => {
        const password = faker.internet.password({ length: 8 });
        
        RegisterPage.fillStep1(
            faker.company.name(),
            faker.string.numeric(14),
            faker.internet.email(),
            password
        );
        RegisterPage.goToStep2();
        
        RegisterPage.fillStep2(
            faker.phone.number(),
            faker.location.zipCode('########'),
            faker.location.street(),
            faker.location.buildingNumber(),
            faker.location.secondaryAddress(),
            faker.location.state({ abbreviated: true })
        );
        
        RegisterPage.submit();
        cy.location('pathname').should('equal', '/login');
    });
});
