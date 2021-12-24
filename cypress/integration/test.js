/// <reference types="cypress" />  
// import faker from 'faker'

describe('pesitive-negative', () => {

    it('switchboard-sales-positive', () => {
        cy.visit("/")
        cy.get('#user_email').type('ashmita.sur+retaileradmin@kreeti.com')
        cy.get('#user_password').type('kreeti123')
        cy.get('.btn').click()
        cy.location('pathname').should('contain', '/retailer/profiles')
    })
})
