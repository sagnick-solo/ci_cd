/// <reference types="cypress" />  

it('switchboard-sales', () => {
    cy.visit("/")
    cy.get('#user_email').type('ashmita.sur+retaileradmin@kreeti.com')
    cy.get('#user_password').type('kreeti123')
    cy.get('.btn').click()
})