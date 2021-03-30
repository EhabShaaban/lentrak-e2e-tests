/// <reference types="Cypress" />

import LoginPage from '../page/LoginPage'

describe('', function() {

    it('', function(){
        const loginPage = new LoginPage()
        loginPage.visit()
        loginPage.login("test@example.com", "password")
        
    })
})