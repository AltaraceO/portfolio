/// <reference types="cypress" />

describe("pause and debug", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:3000/");
  });

  it("pause and debug", () => {
    cy.get("div");
    //this will pause and wait to press continue
    cy.pause();

    cy.log("adding a log between pause and debug");
    //this is like placing a debugger and can only be viewed inside the devTools
    cy.debug();

    //this will check if text exists but will have a 10 sec timeout before it does this
    cy.contains("this text", { timeout: 10 * 1000 }).should("exist");
  });
});
