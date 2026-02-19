class DashboardPage {

  verifyDashboard() {
    cy.url().should('include', '/dashboard')
  }

  clickDirectoryMenu() {
    cy.contains('Directory').click()
  }

  searchEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').type(name)
  }

  clickSearch() {
    cy.contains('Search').click()
  }

  verifyDirectoryPage() {
    cy.url().should('include', '/directory')
  }

}

export default DashboardPage