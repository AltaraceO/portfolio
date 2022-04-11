/// <reference types="cypress" />

describe("More tests", () => {
  it("checking for more things", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-header=my-name]").should("have.text", "ORI ALTARACE");
  });
});
