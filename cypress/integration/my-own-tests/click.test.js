/// <reference types="cypress" />

describe("basic test", () => {
  it("Correct headline Name", () => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:3000/");

    cy.get("[data-test=Contact]").should("exist");
    cy.get("[data-test=Contact]").click();

    //like console.log()
    cy.log("logging where I am at");

    //check what url it is currently at
    cy.url().should("include", "/contacts");

    // go back to the prev page
    cy.go("back");

    //checking what the value of something is
    cy.url().then((value) => {
      cy.log("the url is ", value);
    });
  });
});
