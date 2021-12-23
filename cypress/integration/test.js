/// <reference types="cypress" />  
import faker from 'faker'

describe('pesitive-negative', () => {

    it('switchboard-sales', () => {
        cy.visit("/")
        cy.get('#user_email').type('ashmita.sur+retaileradmin@kreeti.com')
        cy.get('#user_password').type('kreeti123')
        cy.get('.btn').click()
        cy.location('pathname').should('contain', '/retailer/profiles')
    })

    it('switchboard-sales', () => {
        cy.visit("/")
        cy.get('#user_email').type(faker.internet.email())
        cy.get('#user_password').type(faker.internet.password())
        cy.get('.btn').click()
        cy.location('pathname').should('contain', '/retailer/profiles')
    })
})
