/// <reference types="Cypress" />

describe('TestSuite1', () => {
    it('NewTours', () => {
     cy.visit('https://demo.guru99.com/test/newtours/')
     cy.url().should('include', 'guru')
     cy.title().should('equal','Welcome: Mercury Tours')
     
     //Uname and pwd stuff
     cy.get('input[name="userName"]').clear().type('mercury')
     cy.get('input[name="password"]').clear().type('mercury')
     cy.get('input[type="submit"]').should('be.enabled').click()
     cy.get('tbody tr td h3').should('be.visible')

     //Flight finder
     cy.get('body > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > a:nth-child(1)').click()
     cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked')
     cy.get('input[value="oneway"]').should('not.be.checked').click()
     cy.get('input[name="findFlights"]').should('be.enabled').click()
     //back and final assert
     cy.get('img[src="images/home.gif"]').should('be.be.visible')





    })
  })