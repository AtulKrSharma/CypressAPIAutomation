describe("testsuite8-Within", () => {
  it("test-within", () => {
    cy.visit("https://www.amazon.ca/");
    cy.get("#nav-search").within(() => {
      cy.get("#twotabsearchtextbox").type("hello hello");
    });
  });

  it("Select-DD", () => {
    cy.viewport(1024, 768);
    cy.visit("https://www.orangehrm.com/orangehrm-30-day-trial");

    // cy.get("#Form_getForm_subdomain").scrollIntoView();
    cy.get("#Form_getForm_Name")
      .scrollIntoView()
      .type("testing", { delay: 100 });

    cy.get("#Form_getForm_Country")
      .should("be.visible")
      .select("Anguilla")
      .should("have.value", "Anguilla");
  });

  it.only("Google List Testing", () => {
    cy.viewport(1024, 768);
    cy.visit("https://www.google.com/");
    cy.get("input[title='Search']")
      .should("be.enabled")
      .type("cypress", { delay: 100 });

    cy.get(".OBMEnb")
      .find("ul li div div div span")
      .contains("Cypress Garden")
      .click();
    cy.wait(1000);

    cy.get("input[value='cypress garden'][name='q'][aria-label='Search']")
      .should("be.visible")
      .and("have.value", "cypress garden");
  });
});
