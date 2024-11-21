describe("Full Navigation Test", () => {
  const baseUrl = Cypress.env("BASE_URL");

  it("Should verify the home page and navigate to /playground to test toggle buttons", () => {
    // Step 1: Visit the home page and verify content
    cy.visit(`${baseUrl}/`);
    cy.log("Verifying the home page");
    cy.contains("Welcome to Music Dashboard").should("exist");
    cy.contains("Login with spotify").should("exist");

    // Step 2: Navigate to /playground and verify content
    cy.visit(`${baseUrl}/playground`);
    cy.log("Verifying the playground page");
    cy.url().should("include", "/playground");
    cy.contains("This is the playground page to test components").should(
      "exist"
    );

    // Step 3: Toggle Dark Mode
    cy.log("Toggling Dark Mode");
    cy.get('button[title="Dark mode"]').as("darkModeButton");
    cy.get("@darkModeButton").click();

    // Step 4: Verify class changes for Dark Mode toggle
    cy.get("@darkModeButton")
      .should("not.have.class", "hover:bg-neutral-300")
      .and("have.class", "bg-black");

    // Step 5: Toggle back to Light Mode
    cy.log("Toggling back to Light Mode");
    cy.get('button[title="Light mode"]').as("lightModeButton");
    cy.get("@lightModeButton").click();

    // Step 6: Verify class changes for Light Mode toggle
    cy.get("@lightModeButton")
      .should("not.have.class", "hover:bg-black")
      .and("have.class", "bg-neutral-200");

    // Step 7: Verify the "Click on me!" button shows an alert
    cy.log("Testing 'Click on me!' button alert");
    cy.contains("Click on me!").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am a button");
    });
  });
});
