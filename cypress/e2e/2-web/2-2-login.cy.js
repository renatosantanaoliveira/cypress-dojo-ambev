// <reference types ="cypress" />

import usuarios from "../../fixtures/usuarios.json"

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('Deve fazer o login com sucesso', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type("renatosantana@dojo.com.br")
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type("senha@54321")
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Renato Santana')
    })

    it('Deve fazer o login com sucesso - Usando fixture', () => {
        cy.fixture('usuario').then((user) => {
            cy.login(user.email, user.senha)
            cy.get('[data-test="dashboard-welcome"]').should('contain', `Bem-vindo ${user.nome}`)
        })
    })

    it('Deve fazer login com sucesso - Usando importação de dados', () => {
        cy.login(usuarios[2].usuario, usuarios[2].senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    //## Desafio para os alunos
    it('Deve realizar o login sem sucesso', () => {
        cy.login('emailinvalido@gmail.com', 'senha@invalida')
        cy.get('[data-test="alert"]').should('be.visible').and('contain', 'Credenciais inválidas')
    })
})

//########## Para os alunos, não subir comentários no código, abaixo somente uma informação para apreendizado e explicação durante o kata
//npx cypress open -> abre o executor de testes do Cypress para que possa ser executado o cenários um a um
//npx cypress run -> executa toda a sua suíte de teste implementada no projeto (pasta e2e)