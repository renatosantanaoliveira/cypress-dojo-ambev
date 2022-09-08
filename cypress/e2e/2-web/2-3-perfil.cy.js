/// <reference types="cypress" />

describe('Funcionalidade: Criar perfil', () => {
    beforeEach(() => {
        cy.fixture("usuario").then((user) => {
            cy.login(user.email, user.senha)
        })
        
        cy.visit('/criar-perfil')
    });
    
    it('Deve criar perfil com sucesso', () => {
        cy.get('#mui-component-select-status').click()
        // cy.get('.MuiList-root').find('[data-value="Especialista em QA"]').click() //usando find
        // cy.contains('Especialista em QA').click() //usando contains, para buscar somente pelo texto
        cy.get('.MuiList-root').contains('Especialista em QA').click()
        cy.get('[data-test="profile-company"]').type('Via')
        cy.get('[data-test="profile-webSite"]').type('http://www.viahub.com')
        cy.get('[data-test="profile-location"]').type('João Monlevade')
        cy.get('[data-test="profile-skills"]').type('JavaScript, NodeJS, Ruby, Java')
        cy.get('[data-test="profile-gitHub"]').type('renatosantanaoliveira')
        cy.get('[data-test="profile-bio"]').type('Olá, sou o Renato Santana...')
        cy.get('[data-test="profile-submit"]').click()
        cy.get('[data-test="dashboard-editProfile"]').should('exist')
    });

    it('Deve criar perfil com sucesso - Commands', () => {
        cy.criarPerfil('Via', 'http://www.viahub.com', 'João Monlevade', 'JavaScript, NodeJS, Ruby, Java', 'renatosantanaoliveira', 'Olá, sou o Renato Santana...')
        cy.get('[data-test="dashboard-editProfile"]').should('exist')
    });

    //## Desafio para os alunos
    it('Deve validar mensagem de erro ao cadastrar com site errado', () => {
        cy.criarPerfil('Via', 'www', 'João Monlevade', 'JavaScript, NodeJS, Ruby, Java', 'renatosantanaoliveira', 'Olá, sou o Renato Santana...')
        cy.contains('Digite uma url válida').should('be.visible')
    });

});


