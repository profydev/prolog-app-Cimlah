import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";
import { ProjectStatus } from "@api/projects.types";

describe("Project List", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
      }).as("getProjects");
      cy.wait("@getProjects");

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          const currentStatus = mockProjects[index].status;
          cy.wrap($el).contains(
            capitalize(
              ProjectStatus[currentStatus as keyof typeof ProjectStatus],
            ),
          );
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });

    it("Renders Error Message Container if error has occured", () => {
      // Simulate network error
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
        forceNetworkError: true,
      });
      cy.wait(10000);

      // Click on button to refresh
      cy.get('div[id="error-message-container"]')
        .find("button")
        .contains("Try again")
        .click();

      // Simulate normal behaviour
      const languageNames = ["React", "Node.js", "Python"];

      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
      }).as("getProjects");
      cy.wait("@getProjects");

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          const currentStatus = mockProjects[index].status;
          cy.wrap($el).contains(
            capitalize(
              ProjectStatus[currentStatus as keyof typeof ProjectStatus],
            ),
          );
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
