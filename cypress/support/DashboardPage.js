class DashboardPage {

  verifyDashboard() {
    cy.url().should('include', '/dashboard')
  }

  clickDirectoryMenu() {
    cy.contains('Directory').click()
  }

  verifyDirectoryPage() {
    cy.url().should('include', '/directory')
  }

  clickAdminMenu() {
    cy.contains('span', 'Admin')
      .should('be.visible')
      .click()
  }

  verifyAdminPage() {
    cy.url().should('include', '/admin')
  }


}

export default DashboardPage