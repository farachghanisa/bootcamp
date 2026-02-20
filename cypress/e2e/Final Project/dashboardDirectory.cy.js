import LoginPage from '../../support/login_pages'
import DashboardPage from '../../support/DashboardPage'

describe('Dashboard & Directory Feature', () => {

  const login = new LoginPage()
  const dashboard = new DashboardPage()

  beforeEach(() => {

    login.visit()

    cy.intercept('POST', '**/auth/validate').as('loginRequest')

    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()

    cy.wait('@loginRequest')
  })

  it('Verify Dashboard Page', () => {
    dashboard.verifyDashboard()
  })

  it('Open Directory Menu', () => {

    cy.url().should('include', '/dashboard')

    cy.intercept('GET', '**/api/v2/directory/employees*')
    .as('directoryPage')

    dashboard.clickDirectoryMenu()

    cy.wait('@directoryPage')
    .its('response.statusCode')
    .should('eq', 200)

    cy.url().should('include', '/directory')
  })

  it('Open Admin Menu', () => {

    cy.intercept('GET', '**/api/v2/admin/users*')
    .as('adminUsers')

    dashboard.clickAdminMenu()

    cy.wait('@adminUsers')
    .its('response.statusCode')
    .should('eq', 200)

    dashboard.verifyAdminPage()

  })

})