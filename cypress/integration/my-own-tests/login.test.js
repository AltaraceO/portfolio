/// <reference types="cypress" />
const token = "astringoflettersandnumbersthatwilltogethercompriseatoken";

describe("basic desktop test", () => {
  //set token once before instead of before each
  before(() => {
    cy.then(() => {
      window.localStorage.setItem("__auth__token", token);
    });
  });
  //this will run before each test is run. So there is no need to repeat this code over and over
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:3000/");
  });

  it("Typing stuff", () => {});
});
