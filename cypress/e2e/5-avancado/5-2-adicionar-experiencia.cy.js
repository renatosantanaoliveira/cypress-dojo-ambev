/// <reference types="cypress" />
const expPage = require('../../support/pages/add-experiencia.page')

describe('Funcionalidade: Adicionar Experiência', () => {
    beforeEach(() => {
        cy.fixture("usuario").then((user) => {
            cy.login(user.email, user.senha)
        })

        cy.visit('/adicionar-experiencia')
    });
    
    it('Deve adicionar a experiência com sucesso (Uso de Page Objects)', () => {
        expPage.addExperiencia('QA', 'Via', 'Belo Horizonte', '01/12/2020', '12/12/2021', 'Experiencia em QA ')
        cy.get('[data-test="experience-delete"]').should('exist')
    });

    it('Deve adicionar a experiência Atual com sucesso (Uso de Page Objects)', () => {
        expPage.addExperienciaAtual('QA', 'Via', 'Belo Horizonte', '01/12/2020', 'Experiencia em QA ')
        cy.get('[data-test="experience-delete"]').should('exist')
    });
});