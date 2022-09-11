const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import user from "../../fixtures/usuario.json"

Given("que eu esteja na página de Login", () => {
    cy.visit("/login");
});

When("eu inserir usuário e senha", () => {
    cy.login(user.email, user.senha)
});

Then("deve exibir a mensagem de boas vindas no Dashboard", () => {
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
});