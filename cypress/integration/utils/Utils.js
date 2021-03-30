/// <reference types="Cypress" />

class Utils
{
    userIconDiv(){
        return cy.get("div[class='sc-gsTCUz dMzJOQ flex-x center cursor-pointer an-13 bold-text']")
    }
    logoutImg(){
        return cy.get("img[alt='Logout']")
    }
    logout(){
        this.userIconDiv().trigger('mouseover')
        this.logoutImg().click()
    }
}

export default Utils