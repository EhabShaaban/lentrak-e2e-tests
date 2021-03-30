/// <reference types="Cypress" />

import LoginPage from '../page/LoginPage'
import Utils from '../utils/Utils'

describe('', function() {
    beforeEach(function(){
        cy.fixture('login_credentials').as('loginCredentials')
    })
    it('', function(){
        const loginPage = new LoginPage()
        const logout = new Utils()
        loginPage.visit()
        loginPage.login(this.loginCredentials.dev.username, this.loginCredentials.dev.passwd)
        logout.logout()
        
    })
})