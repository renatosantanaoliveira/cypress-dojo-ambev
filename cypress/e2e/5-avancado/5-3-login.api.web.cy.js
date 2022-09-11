/// <reference types="cypress" />

import user from '../../fixtures/usuario.json'

describe('Funcionalidade login via API e acesso ao Perfil', () => {
    beforeEach(() => {
        cy.gerarToken(user.email, user.senha).then((tkn) => {
            Cypress.env('token', tkn)
        })
    });

    it('Validar uso com Cypress.env', () => {
        cy.log(Cypress.env('token'))
    });

    it('Acessar perfil com login realizado via API', () => {
        cy.clearCookie('jwt')
        cy.setCookie('jwt', Cypress.env('token'))
        
        cy.visit('/dashboard')
    });
});