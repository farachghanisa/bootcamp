import LoginPage from '../../support/login_pages.js'
import loginData from '../../fixtures/login_data.json'

describe('Login Feature - POM', () => {

    const login = new LoginPage()

    beforeEach(() => {
        login.visit()
    })

    it('TC01 - Login valid', () => {
        login.inputUsername(loginData.validUser.username)
        login.inputPassword(loginData.validUser.password)
        login.clickLogin()
        login.verifyDashboard()
    })

    it('TC02 - Login password salah', () => {
        login.inputUsername(loginData.wrongPassword.username)
        login.inputPassword(loginData.wrongPassword.password)
        login.clickLogin()
        login.verifyInvalidCredentials()
    })

    it('TC03 - Login username salah (case sensitive)', () => {
        login.inputUsername(loginData.wrongUsername.username)
        login.inputPassword(loginData.wrongUsername.password)
        login.clickLogin()
        login.verifyDashboard()
    })

    it('TC04 - Login username & password salah', () => {
        login.inputUsername(loginData.wrongAll.username)
        login.inputPassword(loginData.wrongAll.password)
        login.clickLogin()
        login.verifyInvalidCredentials()
    })

    it('TC05 - Login username kosong', () => {
        login.inputPassword('admin123')
        login.clickLogin()
        login.verifyRequired()
    })

})