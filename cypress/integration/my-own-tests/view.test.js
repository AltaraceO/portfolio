/// <reference types="cypress" />

describe("More tests", () => {
  it("checking for more things", () => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:3000/");
  });
});
