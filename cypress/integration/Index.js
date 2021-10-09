describe("Home Page", function () {
  it("loads", function () {
    cy.visit("/")
    cy.get("h1").contains("Project Starter").should("be.visible")
    cy.get("#home").should("be.visible")
  })

  it("has link to docs", function () {
    cy.visit("/")
    cy.get("a").contains("Docs").click()
    cy.get("h2").should("contain", "Getting Started").should("be.visible")
    cy.get("a").contains("Project Starter").click()
    cy.get("#home").should("be.visible")
  })

  it("has link to app", function () {
    cy.visit("/")
    cy.get("a").contains("App").click()
    cy.get("#LoginButton", { timeout: 10000 }).should("be.visible")
    cy.get("#SignupButton", { timeout: 10000 }).should("be.visible")
    cy.get("a").contains("Project Starter").click()
    cy.get("#home").should("be.visible")
  })
})
