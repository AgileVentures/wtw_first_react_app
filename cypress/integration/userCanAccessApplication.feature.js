/* eslint-disable no-undef */
describe("User that visits app", () => {
  describe("and the API is working as it should", () => {
    before(() => {
      cy.intercept("**/api/users", { fixture: "users_response.json" });
      cy.visit("/");
    });

    it('is expected to see "Users" header', () => {
      cy.get("body").should("contain.text", "Users");
    });

    it("is expected to display information about 6 users", () => {
      cy.get("[data-cy=users-list]")
        .children()
        .first()
        .should("contain.text", "Thomas")
        .next()
        .should("contain.text", "Mirsad");
    });
  });

  describe("and the API is not working (500 error)", () => {
    before(() => {
      cy.intercept("**/api/users", { statusCode: 500 });
      cy.visit("/");
    });

    it("is expected to display an error message", () => {
      cy.get("[data-cy=message]").should(
        "contain.text",
        "Sorry, the API responded with Internal Server Error"
      );
    });
  });
});
