/// <reference types="Cypress" />

class Utils
{
    //logout locators
    userIconDiv(){
        return cy.get("div[class='sc-gsTCUz dMzJOQ flex-x center cursor-pointer an-13 bold-text']")
    }
    logoutImg(){
        return cy.get("img[alt='Logout']")
    }
    //vin locators
    randomRealVinInput(){
        return cy.get("input[value='Random Real VIN']")
    }
    vinH2(){
        return cy.get("span[id='Result'] h2")
    }
    //login locators
    usernameID(){
        return cy.get("#username")
    }
    passwordID(){
        return cy.get("#password")
    }
    loginButton(){
        return cy.get("button[type='submit']")
    }
    //action methods
    login(username, passwd){
        this.usernameID().type(username)
        this.passwordID().type(passwd)
        this.loginButton().click()
    }
    logout(){
        this.userIconDiv().trigger('mouseover')
        this.logoutImg().click()
    }
    getVIN(){
        cy.visit(Cypress.env('vin'))
        this.randomRealVinInput().click().wait(1000)
        // this.vinH2().then(($vin) => {
        //     cy.log($vin.text())
        // })
        return this.vinH2().text()
    }
}

export default Utils