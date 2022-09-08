/// <reference types="cypress" />
const faker = require('faker-br');

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('/cadastrar')
    });

    it('Cadastro com sucesso', () => {
        let nome = 'Renato ' + faker.name.lastName()
        let email = faker.internet.email(nome)

        cy.get('[data-test="register-name"]').type(nome)
        cy.get('[name="email"]').type(email)
        cy.get('[data-test="register-password"]').type('teste@123')
        cy.get('[data-test="register-password2"]').type('teste@123')
        cy.get('[data-test="register-submit"]').click()
        cy.get('.large').should('contain' , 'Dashboard')
        cy.contains(nome).should('exist')
    });

    //## Desafio para os alunos
    it('Deve validar mensagem quando cadastrar com email repetido', () => {
        let email = faker.internet.email("torres")

        cy.cadastro('Torres', email, 'teste@123', 'teste@123')
        cy.get('[data-test="navbar-logout"]').click() //logout

        cy.cadastro('Torres', email, 'teste@123', 'teste@123')
        cy.get('[data-test="alert"]').should('contain', 'Usuário já registrado')
    });
});

//########## Para os alunos, não subir comentários no código, abaixo somente uma informação para apreendizado e explicação durante o kata

/* 
Funcionalidade: Cadastro 

Cenário: Cadastro com sucesso
Dado que eu esteja na tela de cadastro
Quando  Eu preencher os campos obrigatórios
Então deve direcionar para o dashboard

Cenário: cadastro com pessoa jurídica

Cenário: Cadastro com email inválido

*/

    /* 
    Hooks:
        Before ( antes de todos os cenários)
        visit 
        login
        input de dados
        criar um banco

        Before Each ( Antes de cada cenário)
        visit ()

        After ( depois de todos os cenários)
        matar um banco

        After Each ( depois de cada cenário)
        gerar um screeshot()
    */