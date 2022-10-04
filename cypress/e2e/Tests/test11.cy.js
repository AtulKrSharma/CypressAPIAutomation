describe("TestSuite10", () => {
  it("Check hi check", () => {
    cy.visit("https://www.canadacomputers.com/");
    cy.url().should("contain", "canada");

    cy.get("#cc_quick_search").should("be.visible").type("laptops");
    cy.get("#search_btn").click();

    cy.wait(2000);
    cy.url().should(
      "include",
      "/search/results_details.php?language=en&keywords=laptops"
    );
    cy.get("li:nth-child(1) a:nth-child(1) small:nth-child(1)").click();
    cy.get("#all_mfr").should("be.visible").click();
    cy.get(".mfr.form-check-input[type='checkbox']").check();
  });
});
