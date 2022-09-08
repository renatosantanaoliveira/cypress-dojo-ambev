/// <reference types="cypress" />

describe("Funcionalidade Login via API", () => {
  it("Deve fazer login com sucesso", () => {
    cy.fixture("usuario").then((user) => {
      cy.request({
        method: "POST",
        url: "/api/auth",
        body: {
          email: user.email,
          password: user.senha,
        },
      }).should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("jwt");
        expect(response.duration).be.lessThan(500);
      })
    })
  })
})