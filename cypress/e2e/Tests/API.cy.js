let baseURL = "https://reqres.in/";

before(() => {
  // runs once before all tests in the block
  cy.log("this is set up block");
});

describe("API Testing- Get/ Post", () => {
  it("Get Call", () => {
    cy.visit(baseURL);
    cy.request({
      method: "GET",
      url: "api/users?page=2",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      //logging
      cy.log(res.status);
      cy.log(res.isOkStatusCode);
      cy.log(res.body);
      //Chai Assertions
      expect(res.status).to.eq(200);
      expect(res.body).has.property("page", 2);
    });
  });

  it("Post Call", () => {
    cy.visit(baseURL);
    cy.request({
      method: "POST",
      url: "api/users",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        name: "Dhani",
        job: "NetaJi",
      },
    }).then((resp) => {
      //logging
      cy.log(resp.status);
      cy.log(resp.isOkStatusCode);
      cy.log(resp.body);
      //Chai Assertions
      expect(resp.status).to.eq(201);
      expect(resp.body).has.property("name", "Dhani");
      expect(resp.body).has.property("job", "NetaJi");
      expect(resp.body.id).to.satisfy((num) => {
        return num > 0;
      });
    });
  });
});
