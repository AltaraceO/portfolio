/// <reference types="cypress" />

describe("basic test", () => {
  it("Correct headline Name", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("ORI ALTARACE");
  });
});
