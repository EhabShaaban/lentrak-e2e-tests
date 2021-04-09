/// <reference types="Cypress" />

class DashboardPage
{
    //dashboard label in dashboard page
    dashboardLabelDiv(){
        return cy.get("#content-scroll div[class='an-24 bold-text lh-33 pl15']")
    }
}

export default DashboardPage