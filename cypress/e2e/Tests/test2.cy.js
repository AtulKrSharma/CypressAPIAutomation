/// <reference types="Cypress" />

describe("TestSuite2", () => {

    it.only('depositProtection', () => {
        cy.visit('https://www.depositprotection.com/#')
        cy.url().should('include', 'deposit')
        cy.title().should('include', 'deposit')
        cy.get('a[role=link]').click()
        cy.get('span[data-part=title]').should('be.visible')
        //username
        cy.get('#Username').should('be.enabled').clear().type('vuluh@vomoto.com')
        cy.get('#ConfirmUsername').clear().type('vuluh@vomoto.com')
        //password
        cy.get('#Password').type('Deposit@123#')
        cy.get('#ConfirmPassword').type('Deposit@123#')

        //security questions
        cy.get('#SecurityQuestionId1').should('be.enabled').select('Date of birth')
        cy.get('#SecurityAnswer1').type('02022022')
        cy.get('#SecurityQuestionId2').should('be.enabled').select('First pets name')
        cy.get('#SecurityAnswer2').type('PuppyMyLove')
        cy.get('#SecurityQuestionId3').should('be.enabled').select('Place of birth')
        cy.get('#SecurityAnswer3').type('BristolEngland')
        //personal details

        cy.get('#Accounttype').should('be.enabled').select('2').should('have.value', '2')

        cy.get('#ddltitleValue').should('be.enabled').select('Miss').should('have.value', 'Miss')

        //Address section

        cy.get('#Postcode').should('be.enabled').clear().type('BS3 4RX')
        cy.get('#btnFindAddress').click({force:true})
        cy.wait(1000)
        cy.get('#ddlAaddressListDropdown').should('be.visible').should('be.enabled').select('63a St. Lukes Road, BRISTOL')
        cy.get('#AddressLine1').should('have.value', '63a St. Lukes Road')








    });



});
