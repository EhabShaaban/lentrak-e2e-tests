/// <reference types="Cypress" />

class LoginPage
{
    visit()
    {
        cy.visit(Cypress.config('baseUrl'));
        return this
    }
    usernameID(){
        return cy.get("#username")
    }
    passwordID(){
        return cy.get("#password")
    }
    loginButton(){
        return cy.get("button[type='submit']")
    }
    login(username, passwd){
        this.usernameID().type(username)
        this.passwordID().type(passwd)
        this.loginButton().click()
    }
}

export default LoginPage