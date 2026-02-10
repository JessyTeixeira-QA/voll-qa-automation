import { fakerPT_BR as faker } from '@faker-js/faker';
import RegisterPage from '../support/pages/RegisterPage';
import LoginPage from '../support/pages/LoginPage';

describe('Clinic Registration Flow', () => {
    beforeEach(() => {
        RegisterPage.visit();
    });

    it('should navigate to registration page from home', () => {
        cy.visit('/');
        cy.get('[href="/cadastro"]').click();
        cy.location('pathname').should('equal', '/cadastro');
    });

    it('should validate the multi-step registration process', () => {
        const password = faker.internet.password({ length: 10 });
        const clinicData = {
            name: faker.company.name(),
            cnpj: faker.string.numeric(14),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            cep: faker.location.zipCode('########'),
            street: faker.location.street(),
            number: faker.location.buildingNumber(),
            complement: faker.location.secondaryAddress(),
            state: faker.location.state({ abbreviated: true })
        };

        // Step 1: Basic Info
        RegisterPage.fillStep1(clinicData.name, clinicData.cnpj, clinicData.email, password)
                    .goToStep2();
        
        cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible');

        // Step 2: Technical Info
        RegisterPage.fillStep2({
            phone: clinicData.phone,
            cep: clinicData.cep,
            street: clinicData.street,
            number: clinicData.number,
            complement: clinicData.complement,
            state: clinicData.state
        }).submit();

        // Verification
        cy.location('pathname').should('equal', '/login');
        cy.log('Registration completed successfully for: ' + clinicData.email);
    });
});
