// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("cmdLogin", (email, password) => {
  cy.log("uname->" + email);
  cy.log("pwd-->" + password);
});

Cypress.Commands.add("VisitSite", () => {
  cy.visit("http://automationpractice.com/");
  cy.url().should("contain", "practice");
  cy.get(".shopping_cart")
    .should("be.visible")
    .find("a > span.ajax_cart_no_product")
    .should("be.visible");
});

Cypress.Commands.add("SearchKeyword", (key) => {
  //this.key = key;
  cy.log("Value of Key used:-" + key);
  cy.get("#search_query_top").should("be.visible").and("be.enabled").type(key);
  cy.get("button[name='submit_search']").click({ force: true });
  cy.wait(2000);
  cy.get(".product-listing span").first().should("contain.text", key);
});
