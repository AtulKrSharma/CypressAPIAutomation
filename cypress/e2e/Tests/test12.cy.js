describe("TestSuite12-Command.js", () => {
  beforeEach(() => {
    cy.VisitSite();
  });
  it("Search bar- Dress", () => {
    cy.SearchKeyword("Dress");
  });

  it("Search bar- Blouse", () => {
    cy.SearchKeyword("Blouse");
  });

  it("Search bar- T-Shirts", () => {
    cy.SearchKeyword("T-Shirts");
  });
});
