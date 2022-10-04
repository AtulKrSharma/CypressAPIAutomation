/// <reference types="Cypress" />

describe('TestSuite3', () => {
  it('automationtesting', () => {
    cy.visit('https://demo.automationtesting.in/Register.html')
    cy.url().should('include', 'automationtesting')

    //Uname and pwd stuff
    cy.get('input[placeholder="First Name"]').should('be.enabled').clear().type('mercury')
    cy.get('input[placeholder="Last Name"]').clear().type('mercuryLname')
    cy.get('.ng-touched[ng-model="Adress"]').should('be.enabled').clear().type('28 Corvette Crt')

    cy.get('input[type="email"]').type('raja@vomoto.com')
    cy.get('input[type="tel"]').type('9810290393')
    cy.get('input[value="Male"]').should('be.enabled').click()
    cy.get('#checkbox1').should('be.visible').and().should('not.be.checked').check().should('be.checked').and().should('have.value', 'Cricket')
    cy.get('#checkbox2').should('be.visible').should('not.be.checked').check()
    cy.get('#checkbox3').should('be.visible').should('not.be.checked').check()

    cy.get('#checkbox1').should('be.visible').and().should('be.checked').uncheck().should('not.be.checked')

    cy.get('#msdd').should('be.enabled').click().and().get('.ui-corner-all').contains('Hindi').click().and().get('.ui-corner-all').contains('Arabic').click()
    cy.get('.ui-autocomplete-multiselect-item').contains('Hindi', 'Arabic')
    cy.get('#Skills').should('be.enabled').and().should('have.value', 'Select Skills').select('AutoCAD').and().should('have.value', 'AutoCAD')

    cy.get('span[role="combobox"]').should('be.enabled').click({force: true}).and().get('input[role="textbox"]').type('India').type('{enter}')











  })
})