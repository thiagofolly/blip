/// <reference types="Cypress" />


Cypress.Commands.add('login', () => {
    cy.visit('login')

    cy.get('#email').type(Cypress.env('user_name'))
    cy.get('#password').type(Cypress.env('user_password'))

    cy.get('#blip-login').click()
})