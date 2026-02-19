import LoginPage from '../support/login_pages.js'
import ForgotPasswordPage from '../support/ForgotPasswordPage.js'

describe('Forgot Password Feature', () => {

  const login = new LoginPage()
  const forgot = new ForgotPasswordPage()

  beforeEach(() => {
    login.visit()
  })

  it('Cancel Reset Password', () => {

    forgot.clickForgotPassword()

    cy.url().should('include', '/requestPasswordResetCode')

    cy.contains('Cancel')
    .should('be.visible')
    .click()

    cy.url().should('include', '/auth/login')
  })


  it('Reset Password Empty Username', () => {
    forgot.clickForgotPassword()
    forgot.clickReset()

    cy.get('.oxd-input-field-error-message')
      .should('contain', 'Required')
  })

})