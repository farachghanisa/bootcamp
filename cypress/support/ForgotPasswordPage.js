class ForgotPasswordPage {

  clickForgotPassword() {
    cy.contains('Forgot your password?').click()
  }

  inputUsername(username) {
    cy.get('input[name="username"]').type(username)
  }

  clickReset() {
    cy.get('button[type="submit"]').click()
  }

  successMessage() {
    return cy.get('.oxd-text--h6')
  }

}

export default ForgotPasswordPage