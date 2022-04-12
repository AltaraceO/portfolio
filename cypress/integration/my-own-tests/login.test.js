/// <reference types="cypress" />

describe("basic desktop test", () => {
  //this will run before each test is run. So there is no need to repeat this code over and over
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:3000/");
  });

  it("Typing stuff", () => {});
});
