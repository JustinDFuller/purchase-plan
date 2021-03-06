import { dataTestId } from '../../dom'

describe('Landing Page', function () {
  it('Loads', function() {
    cy.visit("/") 
    cy.contains("Log in")
  })

  it("Links to blog", function() {
    cy.visit("/")

    dataTestId("blog")
      .should("have.attr",  "href", "https://blog.purchaseplan.io")
      .contains("Blog")
  })

  it("Logs In", function() {
    cy.visit("/")

    dataTestId("login-input")
      .type("e2e-tests@purchaseplan.io")

    dataTestId("login-button")
      .click()

    cy.get('[data-magic-iframe-label="auth.magic.link"]')
  })
})
