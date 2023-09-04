import { FooterLinkProps } from "@features/layout";
import { version } from "package.json";

const footerLinks: FooterLinkProps[] = [
  {
    text: "Docs",
    href: "#",
    className: "link",
  },
  {
    text: "API",
    href: "#",
    className: "link",
  },
  {
    text: "Help",
    href: "#",
    className: "link",
  },
  {
    text: "Community",
    href: "#",
    className: "link",
  },
];

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("Desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("Links are working", () => {
      cy.get("footer")
        .find("a")
        .each(($el, index) => {
          cy.wrap($el)
            .contains(footerLinks[index].text)
            .should("have.attr", "href", footerLinks[index].href);
        });
    });

    it("Elements in proper order", () => {
      cy.get("footer").find("p").should("have.css", "order", "1");
      cy.get("footer").find("ul").should("have.css", "order", "2");
      cy.get("footer").find("img").should("have.css", "order", "3");
    });

    it("Properly displays version (not hardcoded)", () => {
      cy.get("footer").find("p").contains(`Version: ${version}`);
    });
  });
});
