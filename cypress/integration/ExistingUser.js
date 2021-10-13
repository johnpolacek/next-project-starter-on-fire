describe("Existing User", function () {
  beforeEach(() => {
    // reset existing user test data
    cy.exec(
      "export GOOGLE_APPLICATION_CREDENTIALS='./src/lib/firebase/admin/firebase-adminsdk.json' && node ./src/lib/firebase/test/setTestExistingUser.js",
      { failOnNonZeroExit: false }
    )

    // log into account
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

  it("can choose an emoji", function () {
    cy.get("#EmojiCurrent").contains("😎").should("be.visible")
    cy.get(".emoji-group[data-name=smileys_people] button")
      .first()
      .click({ force: true })
    cy.get("#EmojiCurrent").contains("😀").should("be.visible")
    cy.get("#EmojiListItem0").contains("😀").should("be.visible")
  })
})
