/// <reference types="Cypress" />

class DashboardPage
{
    // dashboard label in dashboard page
    dashboardLabelDiv(){
        return cy.get("#content-scroll div[class='an-24 bold-text lh-33 pl15']")
    }
    // user profile arrow - top right
    arrowImg(){
        return cy.get("img[class='pl15']")
    }
    settingsLi(){
        return cy.get("li img[alt='Settings']")
    }
    dateConfigInput(){
        return cy.get("input[value='date']")
    }
    saveConfigBtn(){
        return cy.get("button[type='Submit']")
    }
    // actions
    setupStockNumberDateSettings(){
        this.arrowImg().click()
        this.settingsLi().click()
        this.dateConfigInput().click()
        this.saveConfigBtn().click()
    }
}

export default DashboardPage