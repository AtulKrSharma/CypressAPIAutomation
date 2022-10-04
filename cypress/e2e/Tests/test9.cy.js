describe("testsuite9", () => {
  it("Google List Testing-FIND", () => {
    cy.viewport(1024, 768);
    cy.visit("https://www.google.com/");
    cy.get("input[title='Search']")
      .should("be.enabled")
      .type("cypress", { delay: 100 });

    cy.get(".OBMEnb")
      .find("ul li div div div span")
      .contains("Cypress Garden")
      .click({ force: true });
    cy.wait(1000);

    cy.get("input[value='cypress garden'][name='q'][aria-label='Search']")
      .should("be.visible")
      .and("have.value", "cypress garden");
  });

  it("Google List Testing-WITHIN", () => {
    cy.viewport(1024, 768);
    cy.visit("https://www.google.com/");
    cy.get("input[title='Search']")
      .should("be.enabled")
      .type("cypress", { delay: 100 });

    cy.get(".OBMEnb").within(() => {
      cy.get("ul li div div div span").contains("Cypress Garden").click();
      cy.wait(1000);
    });
    cy.get("input.gLFyf").should("have.value", "cypress garden");
  });

  it("Dress Listing-Find", () => {
    cy.viewport(1024, 768);
    cy.visit("http://automationpractice.com");
    cy.url().should("contain", "automation");
    cy.get("#search_query_top")
      .clear()
      .should("be.enabled")
      .type("dress", { delay: 1000 });
    cy.wait(1000);

    cy.get(".ac_results")
      .should("be.visible")
      .find("ul li")
      .contains("Blouses")
      .click();
  });

  it("Dress Listing-Within", () => {
    cy.viewport(1024, 768);
    cy.visit("http://automationpractice.com");
    cy.url().should("contain", "automation");
    cy.get("#search_query_top")
      .clear()
      .should("be.enabled")
      .type("dress", { delay: 1000 });
    cy.wait(1000);
    cy.get(".ac_results").within(() => {
      cy.get("ul li").contains("Blouses").click();
    });
    cy.get("h1[itemprop='name']").should("be.visible");
  });
});
