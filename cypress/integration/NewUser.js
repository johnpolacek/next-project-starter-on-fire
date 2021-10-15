describe("New User", function () {
  beforeEach(() => {
    cy.exec(
      "export GOOGLE_APPLICATION_CREDENTIALS='./src/lib/firebase/admin/firebase-adminsdk.json' && node ./src/lib/firebase/test/deleteTestUser.ts",
      { failOnNonZeroExit: false }
    )
  })

  it("can sign up for account", function () {
    cy.fixture("users").then((users) => {
      cy.visit("/app")
      cy.get("#SignupButton", { timeout: 10000 }).click()
      cy.get("#SignupForm", { timeout: 20000 }).should("be.visible")
      cy.get("input[name=first]").type(users.new.firstName)
      cy.get("input[name=last]").type(users.new.lastName)
      cy.get("input[name=email]").type(users.new.email)
      cy.get("input[name=password]").type(users.new.password)
      cy.get("#agreeTerms div").eq(0).click()
      cy.get("#SignupForm button").contains("Sign Up").click()
      cy.get("#EmojiChooser", { timeout: 20000 }).should("be.visible")
    })
  })

  it("cannot sign up with existing account email", function () {
    cy.fixture("users").then((users) => {
      cy.visit("/app")
      cy.get("#SignupButton", { timeout: 10000 }).click()
      cy.get("#SignupForm", { timeout: 20000 }).should("be.visible")
      cy.get("input[name=first]").type(users.new.firstName)
      cy.get("input[name=last]").type(users.new.lastName)
      cy.get("input[name=email]").type(users.existing.email)
      cy.get("input[name=password]").type(users.new.password)
      cy.get("#agreeTerms div").eq(0).click()
      cy.get("#SignupForm button").contains("Sign Up").click()
      cy.get(".error-message", { timeout: 20000 })
        .contains("The email address is already in use by another account.")
        .should("be.visible")
      cy.get("#EmojiChooser", { timeout: 20000 }).should("not.exist")
    })
  })

  it("needs to agree to terms and conditions", function () {
    cy.fixture("users").then((users) => {
      cy.visit("/app")
      cy.get("#SignupButton", { timeout: 10000 }).click()
      cy.get("#SignupForm", { timeout: 20000 }).should("be.visible")
      cy.get("input[name=first]").type(users.new.firstName)
      cy.get("input[name=last]").type(users.new.lastName)
      cy.get("input[name=email]").type(users.new.email)
      cy.get("input[name=password]").type(users.new.password)
      cy.get("#SignupForm button").contains("Sign Up").click()
      cy.get("#EmojiChooser", { timeout: 20000 }).should("not.exist")
    })
  })

  it("needs account to choose emojis", function () {
    cy.visit("/app")
    cy.get("#LoginButton", { timeout: 10000 }).should("be.visible")
    cy.get("#SignupButton", { timeout: 10000 }).should("be.visible")
    cy.get("#EmojiChooser").should("not.exist")
  })
})
