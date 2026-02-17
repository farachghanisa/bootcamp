class LoginPage {

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    inputUsername(username) {
        cy.get('input[name="username"]').clear().type(username)
    }

    inputPassword(password) {
        cy.get('input[name="password"]').clear().type(password)
    }

    clickLogin() {
        cy.get('button[type="submit"]').click()
    }

    verifyDashboard() {
        cy.url().should('include', '/dashboard')
        cy.contains('Dashboard').should('be.visible')
    }

    verifyInvalidCredentials() {
        cy.contains('Invalid credentials').should('be.visible')
    }

    verifyRequired() {
        cy.contains('Required').should('be.visible')
    }
}

export default LoginPage