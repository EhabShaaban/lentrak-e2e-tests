/// <reference types="Cypress" />

class CreateInventoryPage
{
    jokerLocatorInfoInput(value){
        return cy.get("#inventory-info-input-"+value)
    }
    jokerLocatorIndSelect(value){
        return cy.get("#inventory-ind-select-"+value)
    }
    jokerLocatorIndInput(value){
        return cy.get("#inventory-ind-input-"+value)
    }
    createInventoryId(){
        return cy.get("#create-inventory-id")
    }
    // 1. General Information
    vinId(){
        return cy.get("#vin")
    }
    decodeBtn(){
        return cy.get("#decode-vin")
    }
    stockNumberId(){
        return cy.get("#stock_number")
    }
    listingMileageId(){
        return this.jokerLocatorInfoInput(6223)
    }
    listingPriceInput(){
        return this.jokerLocatorInfoInput(8388)
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
        return this.jokerLocatorIndSelect(12210)
    }
    awdDiv(){
        return this.jokerLocatorIndSelect(12211)
    }
    fwdDiv(){
        return this.jokerLocatorIndSelect(12212)
    }
    rwdDiv(){
        return this.jokerLocatorIndSelect(12213)
    }
    fuelTypeId(){
        return this.jokerLocatorIndSelect(6840)
    }
    // Specs >> Transmission
    automaticDiv(){
        return this.jokerLocatorIndSelect('02430')
    }
    manualDiv(){
        return this.jokerLocatorIndSelect('02431')
    }
    cylindersId(){
        return this.jokerLocatorIndSelect(9917)
    }
    highwayFuelEcoId(){
        return this.jokerLocatorIndInput(9008)
    }
    bodyTypeId(){
        return cy.get("#specs-body-type-9570")
    }
    // Specs >> Number of Doors
    numberOfDoors2Div(){
        return this.jokerLocatorIndSelect(18990)
    }
    numberOfDoors3Div(){
        return this.jokerLocatorIndSelect(18991)
    }
    numberOfDoors4Div(){
        return this.jokerLocatorIndSelect(18992)
    }
    numberOfDoors5Div(){
        return this.jokerLocatorIndSelect(18993)
    }
    numberOfDoorsOtherDiv(){ 
        return this.jokerLocatorIndSelect(18994)
    }
    cityFuelEcoId(){
        return this.jokerLocatorIndInput('0335')
    }
    engineDisplacementId(){
        return this.jokerLocatorIndInput(8670)
    }
    passengersId(){
        return this.jokerLocatorIndInput(1843)
    }
    combinedFuelEcoId(){
        return this.jokerLocatorIndInput(9726)
    }
    // next btn to next page
    nextBtn(){
        return cy.get("#inventory-info-btn-0752")
    }
    // 2. Purchase Information
    sourceSpan(){
        return cy.get("#inventory-purchase-info-select-3662")
    }
    vendorId(){
        return cy.get("#inventory-purchase-info-select-8161")
    }
    purchaseMileageId(){
        return cy.get("#inventory-purchase-info-input-1168")
    }
    purchaseCommentsId(){
        return cy.get("#inventory-purchase-info-text-3833")
    }
    purchasePriceInput(){
        return cy.get("div[data-testid='purchase-price'] input")
    }
    purchaseTaxInput(){
        return cy.get("#inventory-purchase-info-input-0437")
    }
    purchaseInvoiceId(){
        return cy.get("#inventory-purchase-info-input-3796")
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
    selectMultipleFeatures(...features){
        for(let feature of features){
            this.featuresDiv(feature).click()
        }
    }
}

export default CreateInventoryPage