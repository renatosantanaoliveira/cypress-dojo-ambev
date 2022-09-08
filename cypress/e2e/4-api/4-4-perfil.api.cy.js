/// <reference types="cypress" />

import user from '../../fixtures/usuario.json'

describe('Funcionalidade Perfil via API', () => {
    let token

    beforeEach(() => {
        cy.gerarToken(user.email, user.senha).then((tkn) => {
            token = tkn
        })
    });

    it.skip('[GET] - Deve consultar perfil do usuário', () => {
        cy.request({
            method: 'POST', 
            url: 'api/auth',
            body: {
                "email": user.email,
                "password": user.senha
              } 
        }).then((response) =>{
            let token = response.body.jwt

            cy.request({
                method: 'GET', 
                url: '/api/profile/me', 
                headers: {
                    Cookie: token
                }
            }).then((response) => {
                expect(response.status).equal(200)
                expect(response.body.githubusername).to.equal("renatosantanaoliveira")
                expect(response.body.skills[1]).to.equal('NodeJS')
            })
        })
    });

    it('[GET] - Deve consultar perfil do usuário - Usando token dinâmico', () => {
        cy.request({
            method: 'GET', 
            url: '/api/profile/me', 
            headers: {
                Cookie: token
            }
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.githubusername).to.equal("renatosantanaoliveira")
            expect(response.body.skills[1]).to.equal('NodeJS')
        })        
    });


    it.skip('[PUT] - Deve adicionar experiência profissional do usuário', () => {
        cy.request({
            method: 'PUT', 
            url: '/api/profile/experience', 
            headers: {
                Cookie: token
            },
            body: {
                "title": "QA Especialist",
                "company": "Via",
                "from": "2022-09-08",
            }
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.experience[0].title).to.equal("QA Especialist")
            expect(response.body.experience[0].company).to.equal('Via')
        })        
    });

    it('[DELETE] - Deve adicionar experiência profissional do usuário', () => {    
        const body = {
            "title": "QA Especialist",
            "company": "Via",
            "from": "2022-09-08",
        }

        cy.cadastrarExperiencia(token,body.title, body.company, body.from).then((id) => {
            cy.request({
                method: 'DELETE', 
                url: `api/profile/experience/${id}`, 
                headers: {
                    Cookie: token
                },
            }).then((response) => {
                expect(response.status).equal(200)
                expect(response.body.experience).to.empty
            })   
        })
    });

});