const { expect } = require("chai");

before(function () {
  cy.log("Counter is in before hook");
  // "this" points at the test context object
  cy.fixture("testDataUsers.json").then((users) => {
    // "this" is still the test context object
    cy.log(users);
    this.users = users;
    // expect(users).to.be.an('array')
    // users.forEach((user) => {
    //   expect(user).to.have.keys(['id', 'name', 'lname', 'username', 'email'])
    //   this.users = users

    // })
  });
});

describe("TestSuite7-Fixtures", () => {
  it("DDT using Fixtures", function () {
    cy.log("Counter is in test case- Started");
    cy.cmdLogin("raja", "Wordpass#123");

    cy.viewport(1920, 1080);

    cy.visit("https://www.nopcommerce.com/en/login?returnUrl=%2Fen");
    cy.get('input[value="Register"]').click();

    cy.get("#FirstName").type(this.users.name);
    cy.get("#LastName").type(this.users.lname);
    cy.get("#Email").type(this.users.email, { delay: 100 });
    cy.get("#ConfirmEmail").type(this.users.email);
    cy.get("#Username").type(this.users.username, { delay: 100 });
    cy.get("#check-availability-button").click();
    cy.wait(1000);
    cy.get("#username-availabilty").should("be.visible").with;
    cy.log("Counter is in test case- Ended");
  });
});
