describe("Loading circle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("Desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("Loading circle in Projects", () => {
      cy.get('div[id="loadingCircle"]').should(
        "have.css",
        "content",
        'url("http://localhost:3000/icons/loading-circle.svg")',
      );
    });

    it("Loading circle in Issues", () => {
      cy.get("nav").find("a").contains("Issues").click();
      cy.get('div[id="loadingCircle"]').should(
        "have.css",
        "content",
        'url("http://localhost:3000/icons/loading-circle.svg")',
      );
    });
  });
});
