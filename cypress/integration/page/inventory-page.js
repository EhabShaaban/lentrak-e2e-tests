/// <reference types="Cypress" />

class InventoryPage
{
    vinDiv(){
        return cy.get("div[class='vehicle-vin an-24 bold-text pt15']")
    }
    // InventoryStatusDiv(){
    //     return cy.get("div[class='lh-19 an-14 px15 py5 ml10 in-stock-chip']")
    // }
    // bodyTypeDiv(){
    //     return cy.get("div[class='flex-x align-center']").eq(0)
    // }
    // listingMileageDiv(){
    //     return cy.get("div[class='flex-x align-center before-dot']")
    // }
    // listingPriceDiv(){
    //     return cy.get("div[class='an-26 lh-33 bold-text']").eq(0)
    // }
    // purchasePriceDiv(){
    //     return cy.get("div[class='an-26 lh-33 bold-text']").eq(1)
    // }
    // totalExpensesDiv(){
    //     return cy.get("div[class='an-26 lh-33 bold-text']").eq(2)
    // }
    // totalCostDiv(){
    //     return cy.get("div[class='an-26 lh-33 bold-text']").eq(3)
    // }
    // profitDiv(){
    //     return cy.get("div[class='an-26 lh-33 bold-text']").eq(4)
    // }
    // sourceDiv(){
    //     return cy.get("div[class='an-18 bold-text lh-18']").eq(0)
    // }
    // taxDiv(){
    //     return cy.get("div[class='an-18 bold-text lh-18']").eq(4)
    // }
    // invoiceNumberDiv(){
    //     return cy.get("div[class='an-18 bold-text lh-18']").eq(2)
    // }
    // purchaseMileageDiv(){
    //     return cy.get("div[class='an-18 bold-text lh-18']").eq(5)
    // }
}

export default InventoryPage