/// <reference types="cypress" />

describe('Funcionalidade Cadastro via API', () => {
    it('Deve fazer cadastro com sucesso', () => {

        //var email = "renato" + Math.floor(Math.random() * 100000) + "@dojo.com.br" // exemplo com concatenacao
        var email = `renato${Math.floor(Math.random() * 100000)}@dojo.com.br`  //exemplo com interpolação

        cy.request({
            method: 'POST', 
            url: '/api/users', 
            body: {
                "name": "Renato Santana",
                "email": email,
                "password": "teste@123"
              }
        }).then((response) =>{
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('jwt')
        })
    });
});
