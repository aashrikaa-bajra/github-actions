it("Basic cross-origin test", () => {
  cy.visit("https://w3schools.com");

  cy.origin("https://google.com", () => {
    cy.visit("");
    cy.title().should("include", "Google");
  });
});
