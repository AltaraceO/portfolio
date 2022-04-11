/// <reference types="cypress" />

describe("basic test", () => {
  it("Correct headline Name", () => {
    cy.visit("http://localhost:3000/");
    //searching for particular tests on the site
    cy.contains("ORI ALTARACE").should("exist");

    // cy.get("div#root").should("exist");

    //instead of classnames use custom data attributes and number
    //eg. data-testid='123'
    // cy.get("[data-testid=loadButton]");
    cy.get("[data-header=my-name]").should("exist");
    cy.get("[data-header=my-name]").click();
    // cy.get("div[di=root]").should("exist");
    // cy.get("div#rooter").should("not.exist");
  });
});
