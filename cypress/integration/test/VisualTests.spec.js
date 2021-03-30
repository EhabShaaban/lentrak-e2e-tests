/// <reference types="Cypress" />

import LoginPage from '../page/LoginPage'
import Utils from '../utils/Utils'

const loginPage = new LoginPage()
const utils = new Utils()

describe('', function() {
    beforeEach(function(){
        cy.fixture('login_credentials').as('loginCredentials')
    })
    it('', function(){
        // loginPage.visit()
        // loginPage.login(this.loginCredentials.dev.username, this.loginCredentials.dev.passwd)
        // utils.logout()
        utils.getVIN()
    })
})