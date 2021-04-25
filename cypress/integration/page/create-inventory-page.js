/// <reference types="Cypress" />

class CreateInventoryPage
{
    // 1. General Information
    vinId(){
        return cy.get("#vin")
    }
    decodeBtn(){
        return cy.get("#decode")
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
    exteriorColorDiv(exteriorColor){
        return cy.get("div[data-testid='exterior-"+exteriorColor+"']");
    }
    interiorColorColorDiv(interiorColor){
        return cy.get("div[data-testid='interior-"+interiorColor+"']");
    }
    featuresDiv(specType){
        return cy.get("div[data-testid='"+specType+"'")
    }
    // Specs >> Drivetrain
    fourWdDiv(){
        return cy.get("#four_wd")
    }
    awdDiv(){
        return cy.get("#awd")
    }
    fwdDiv(){
        return cy.get("#fwd")
    }
    rwdDiv(){
        return cy.get("#rwd")
    }
    fuelTypeId(){
        return cy.get("#fuel_type")
    }
    // Specs >> Transmission
    automaticDiv(){
        return cy.get("#automatic")
    }
    manualDiv(){
        return cy.get("#manual")
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
    // Specs >> Number of Doors
    numberOfDoors2Div(){
        return cy.get("#door_2")
    }
    numberOfDoors3Div(){
        return cy.get("#door_3")
    }
    numberOfDoors4Div(){
        return cy.get("#door_4")
    }
    numberOfDoors5Div(){
        return cy.get("#door_5")
    }
    numberOfDoorsOtherDiv(){ 
        return cy.get("#other")
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
    // next btn to next page
    nextBtn(){
        return cy.get("button[type='submit']")
    }
    // 2. Purchase Information
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
        return cy.get("div[data-testid='purchase-price'] input")
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
    generatedStockNumberDiv(){
        return cy.get("#created-stock-number")
    }
    congratulationsMsgDiv(){
        return cy.get("#congratulations")
    }

    // actions that this page can do
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
    selectDoorNumber(number){
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
    typeVin(vinCode){
        this.vinId().type(vinCode).type('{enter}')
        this.decodeBtn().click()
    }
    typeListingPrice(listingPrice){
        this.listingPriceInput().type(listingPrice)
    }
    clickNext(){
        this.nextBtn().click()
    }
    selectFeature(specType){
        this.featuresDiv(specType).click()
    }
}

export default CreateInventoryPage