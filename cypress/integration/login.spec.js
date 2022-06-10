/// <reference types="Cypress" />

describe('Login', () => {
    it.only('Login válido', () => {
        cy.login()

        cy.get('#logout-link').should('exist')
    })

    it('Senha inválida', () => {
        cy.visit('login')

        cy.get('#email').type(Cypress.env('user_name'))
        cy.get('#password').type('Qwe12345*')

        cy.get('#blip-login').click()

        cy.get('#[class="toast"]').should('have.text', 'Login e/ou senha inválidos')
    })

    it('Email inválida', () => {
        cy.visit('login')

        cy.get('#email').type('email.com.br')
        cy.get('#password').type('Qwe12345*')

        cy.get('#blip-login').click()

        cy.get('#[class="toast"]').should('have.text', 'Login e/ou senha inválidos')
    })
})