/// <reference types="Cypress" />

class CreateInventoryPage
{
    //1. General Information
    vinId(){
        return cy.get("#vin")
    }
    decodeBtn(){
        return cy.get("button[class='ant-btn']")
    }
    stockNumberId(){
        return cy.get("#stock_number")
    }
    listingMileageId(){
        return cy.get("#mileage")
    }
    listingPriceInput(){
        return cy.get("input[data-testid='Listing Price']")
    }
    exteriorColorDiv(){
        return cy.get("div[style='background-color: rgb(255, 255, 255); margin-right: 5px;']").eq(0)
    }
    interiorColorColorDiv(){
        return cy.get("div[style='background-color: rgb(255, 255, 255); margin-right: 5px;']").eq(1)
    }
    // .eq(i) >> from 0 to 19 >> 20 total feature
    featuresDiv(idx){
        return cy.get("div[style='color: rgb(87, 98, 117);']").eq(idx)
    }
    //Specs >> Drivetrain
    fourWdDiv(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(0)
    }
    awdDiv(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(1)
    }
    fwdDiv(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(2)
    }
    rwdDiv(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(3)
    }
    fuelTypeId(){
        return cy.get("#fuel_type")
    }
    //Specs >> Transmission
    automaticDiv(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(3)
    }
    manualDiv(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(4)
    }
    cylindersId(){
        return cy.get("#cylinders")
    }
    highwayFuelEcoId(){
        return cy.get("input[data-testid='Highway Fuel Economy']")
    }
    bodyTypeId(){
        return cy.get("#body")
    }
    //Specs >> Number of Doors
    numberOfDoors2Div(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(4)
    }
    numberOfDoors3Div(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(5)
    }
    numberOfDoors4Div(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(6)
    }
    numberOfDoors5Div(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(7)
    }
    numberOfDoorsOtherDiv(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(8)
    }
    cityFuelEcoId(){
        return cy.get("input[data-testid='City Fuel Economy']")
    }
    engineDisplacementId(){
        return cy.get("input[data-testid='Engine Displacement (e.g. 0.0)']")
    }
    passengersId(){
        return cy.get("input[data-testid='Passangers']")
    }
    combinedFuelEcoId(){
        return cy.get("input[data-testid='Combined Fuel Economy']")
    }
    //next btn to next page
    nextBtn(){
        return cy.get("button[type='submit']")
    }
    //2. Purchase Information
    sourceSpan(){
        return cy.get("#source")
    }
    vendorId(){
        return cy.get("#purchase_vendor")
    }
    purchaseMileageId(){
        return cy.get("#purchase_mileage")
    }
    purchaseCommentsId(){
        return cy.get("#purchase_coments")
    }
    purchasePriceInput(){
        return cy.get("input[class='input currency-input ant-input']")
    }
    purchaseTaxInput(){
        return cy.get("input[data-testid='Tax']")
    }
    purchaseInvoiceId(){
        return cy.get("#purchase_invoice")
    }
    saveBtn(){
        return cy.get("button[type='submit']")
    }
    successMsgDiv(){
        return cy.get("div[class='an-16 lh-25 pt10']")
    }
    congratulationsMsgDiv(){
        return cy.get("div[class='an-25 bold-text congratulations-text pt15']")
    }
    // actions
    selectGear(gearType){
        if(gearType == "automatic"){
            return this.automaticDiv().click();
        } else {
            return this.manualDiv().click();
        }
    }
    selectInventoryType(inventoryType){
        if(inventoryType=="4wd"){
            return this.fourWdDiv().click();
        } else if(inventoryType=="awd"){
            return this.awdDiv().click();
        } else if(inventoryType=="fwd"){
            return this.fwdDiv().click();
        } else {
            // rwd
            return this.rwdDiv().click();
        }
    }
    selectDoors(number){
        if(number==2){
            return this.numberOfDoors2Div().click();
        } else if(number==3){
            return this.numberOfDoors3Div().click();
        } else if(number==4){
            return this.numberOfDoors4Div().click();
        } else if(number==5) {
            return this.numberOfDoors5Div().click();
        } else {
            return this.numberOfDoorsOtherDiv().click();
        }
    }
}

export default CreateInventoryPage