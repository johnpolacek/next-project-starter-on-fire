describe("Existing User", function () {
  it("can login to account", function () {
    cy.fixture("users").then((users) => {
      cy.visit("/app")
      cy.get("#LoginButton", { timeout: 10000 }).click()
      cy.get("#LoginForm", { timeout: 20000 }).should("be.visible")
      cy.get("input[name=email]").type(users.existing.email)
      cy.get("input[name=password]").type(users.existing.password)
      cy.get("#LoginForm button").contains("Login").click()
      cy.get("#EmojiChooser", { timeout: 20000 }).should("be.visible")
    })
  })
})
