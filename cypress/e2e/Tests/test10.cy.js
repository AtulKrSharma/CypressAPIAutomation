describe("TestSuite10", () => {
  it("Mouse Over- Spicejet", () => {
    cy.viewport(1024, 768);
    cy.visit("https://www.spicejet.com/");
    cy.get(".r-18u37iz").within(() => {
      //cy.get("div div div div div").trigger("mouseover");
      cy.contains("Add-ons").trigger("mouseover");
    });
  });

  it.skip("SpiceJet-SignUp Form", () => {
    cy.visit("https://spiceclub.spicejet.com/signup");
  });

  it("Dress Listing-Within", () => {
    //cy.viewport(1024, 768);
    cy.visit("http://automationpractice.com");
    cy.url().should("contain", "automation");
    cy.get(".shopping_cart")
      .should("be.visible")
      .find("a > span.ajax_cart_no_product")
      .should("be.visible");

    cy.get(".ajax_add_to_cart_button").first().click();
    cy.get(".button-medium").should("be.visible");
    cy.get(".cross[title='Close window']").should("be.visible").click();

    cy.wait(1000);
    cy.get(".shopping_cart a > span").within(() => {
      cy.contains("Product").trigger("mouseover");
      //cy.contains("Product").invoke("show");
    });
    cy.get("#button_order_cart").should("be.visible").click();
    cy.url().should("include", "controller=order");
    cy.get(
      "a[class='button btn btn-default standard-checkout button-medium'] span"
    ).should("be.visible");

    cy.wait(1000);

    cy.get(".icon-trash").should("be.visible").click({ force: true });
    cy.get("a > span.ajax_cart_no_product").should("be.visible");
    cy.get(".alert.alert-warning").should("be.visible");
  });

  it.only("Mouse hover using trigger ", () => {
    cy.viewport(1440, 660);
    cy.visit("https://www.puregrips.com/pages/custom-grips");
    cy.get(".header__linklist").within(() => {
      cy.get("li").contains("CUSTOM").invoke("show");
    });
  });
});
