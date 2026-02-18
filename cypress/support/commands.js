// Comando customizado para realizar login via interface gráfica utilizando cy.session para persistir a sessão
Cypress.Commands.add('login', (email, senha) => {
    cy.session([email, senha], () => {
        cy.visit('/login')
        // Preenche os campos de e-mail e senha
        cy.get('[data-test="inputLoginEmail"]').type(email)
        cy.get('[data-test="inputLoginSenha"]').type(senha, { log: false })
        // Clica no botão de entrar e valida se o redirecionamento para o dashboard ocorreu
        cy.get('[data-test="botaoTeste"]').should('be.visible').click()
        cy.location('pathname').should('eq', '/dashboard')
    })
})

// Comando customizado para preencher o formulário de cadastro de um novo especialista
Cypress.Commands.add('cadastraEspecialista', (nome, email, senha, especialidade, crm, imagem, cep, rua, numero, complemento, estado) => {
    // Navega até o dashboard e abre o modal de cadastro
    cy.visit('/dashboard')
    cy.contains('Cadastrar especialista').should('be.visible').click()
    
    // Preenche as informações pessoais e profissionais
    cy.get('[data-test="inputEspecialistaNome"]').type(nome)
    cy.get('[data-test="inputEspecialistaEmail"]').type(email)
    cy.get('[data-test="inputEspecialistaSenha"]').type(senha)
    cy.get('[data-test="inputEspecialistaSenhaVerificada"]').type(senha)
    cy.get('[data-test="inputEspecialistaEspecialidade"]').type(especialidade)
    cy.get('[data-test="inputEspecialistaCRM"]').type(crm)
    cy.get('[data-test="inputEspecialistaImagem"]').type(imagem)
    
    // Preenche as informações de endereço
    cy.get('[data-test="inputEspecialistaCEP"]').type(cep)
    cy.get('[data-test="inputEspecialistaRua"]').type(rua)
    cy.get('[data-test="inputEspecialistaNumero"]').type(numero)
    cy.get('[data-test="inputEspecialistaComplemento"]').type(complemento)
    cy.get('[data-test="inputEspecialistaEstado"]').type(estado)
})

// Comando customizado para realizar login diretamente via API (mais rápido para testes de integração)
Cypress.Commands.add('loginApi', (email, senha) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('api_login'),
        body: {
            email: email,
            senha: senha
        }
    }).then(response => {
        // Validações da resposta da API
        expect(response.status).to.eq(200);
        expect(response.body.auth).to.be.true;
        expect(response.body.rota).to.eq('/clinica');
        expect(response.body.token).to.exist;
        // Armazena o token para uso em requisições subsequentes
        cy.wrap(response.body.token).as('token');
    })
})