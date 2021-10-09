describe("Docs page", function () {
  it("loads", function () {
    cy.visit("/docs")
    cy.get("#docs").should("be.visible")
  })
})
