/// <reference types="Cypress" />

import LoginPage from '../page/LoginPage'
import Utils from '../utils/Utils'

describe('', function() {

    it('', function(){
        const loginPage = new LoginPage()
        const logout = new Utils()
        loginPage.visit()
        loginPage.login("test@example.com", "password")
        logout.logout()
        
    })
})