/// <reference types="cypress" />

describe("basic test", () => {
  it("Typing stuff", () => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:3000/");

    //find a text field using data-test
    cy.get("[data-test=input]").type("admin");
    cy.get("[data-test=password]").type("admin");
    cy.get("[data-test=submit]").click();

    //IF checking for the wrong password -- after above series
    cy.get("unable to login please check password").should("exist");
  });
});
