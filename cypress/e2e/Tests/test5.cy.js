/// <reference types="Cypress" />

describe('TestSuite5', () => {

  it('Table Test', () => {

    cy.visit('https://testautomationpractice.blogspot.com')
    cy.get('table[name="BookTable"]').contains('td', 'Master In Selenium').should('be.visible')

    cy.get('table[name="BookTable"] > tbody:nth-child(1) tr:nth-child(6) > td:nth-child(2)').contains('td', 'Amod').should('be.visible')

    cy.get('table[name="BookTable"] > tbody > tr > td:nth-child(2)').contains('Animesh')

    });

});

