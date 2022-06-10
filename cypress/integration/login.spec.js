/// <reference types="Cypress" />

describe('Login', () => {
    it('Login válido', () => {
        cy.login()

        cy.get('#logout-link').should('exist')
    })

    it('Senha inválida', () => {
        cy.visit('login')

        cy.get('#email').type(Cypress.env('user_name'))
        cy.get('#password').type('Qwe12345*')

        cy.get('#blip-login').click()

        cy.get('[icon="error"]').should('be.visible')
    })

    it('Email inválido', () => {
        cy.visit('login')

        cy.get('#email').type('email@email.com.br')
        cy.get('#password').type('Qwe12345*')

        cy.get('#blip-login').click()

        cy.get('[icon="error"]').should('be.visible')
    })
})