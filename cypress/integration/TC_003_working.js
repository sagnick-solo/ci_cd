/// <reference types="cypress" />  
//auto complete the cypress commands

it('test title', () => {
    cy.visit('https://google.com')

    cy.get('.gLFyf', {timeout:8000})
    .type('thisissagnick{enter}')
    
    cy.contains('thisissagnick.netlify.com').click()
})