/// <reference types="cypress" />  
//auto complete the cypress commands

it('test title', () => {
    cy.visit('https://google.com')

    // cy.get('[name="q"]')
//custom timeout
    cy.get('.gLFyf', {timeout:8000})
    .type('Post Malone{enter}')

    cy.get('.MUFPAc > :nth-child(2) > a')
    .click()
})