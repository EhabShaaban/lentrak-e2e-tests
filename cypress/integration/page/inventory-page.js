/// <reference types="Cypress" />

class InventoryPage
{
    jokerSpecSpan(value){
        return cy.get("#inventory-spec-span-"+value)
    }
    jokerInsightInput(value){
        return cy.get("#4847-inventory-insight-input-3445-"+value)
    }
    stockId(){
        return cy.get("#created-stock-number")
    }
    inventoryStatusId(){
        return cy.get("#created-status")
    }
    vinId(){
        return cy.get("#vin_id")
    }
    bodyTypeId(){
        return cy.get("#body_type")
    }
    mileageId(){
        return cy.get("#mileage")
    }

    interiorColoId(color){
        return cy.get("#"+color)
    }
    exteriorColoId(color){
        return cy.get("#"+color)
    }
    listingPriceId(){
        return this.jokerInsightInput(0)
    }
    purchasePrice(){
        return this.jokerInsightInput(1)
    }
    totalCostId(){
        return this.jokerInsightInput(3)
    }
    profitId(){
        return this.jokerInsightInput(4)
    }
    gearTypeId(){
        return this.jokerSpecSpan(7251)
    }
    drivetrainTypeId(){
        return this.jokerSpecSpan(3156)
    }
    numberOfDoorsId(){
        return this.jokerSpecSpan(2058)
    }
    fuelTypeId(){
        return this.jokerSpecSpan(5062)
    }
    cylindersId(){
        return this.jokerSpecSpan(7062)
    }
    cityFuelEcoId(){
        return this.jokerSpecSpan(7878)
    }
    combinedFuelEcoId(){
        return this.jokerSpecSpan(5033)
    }
    highwayFuelEcoId(){
        return this.jokerSpecSpan(9681)
    }
    engineDisplacementId(){
        return this.jokerSpecSpan(7444)
    }
    engineDisplacementId(){
        return this.jokerSpecSpan(7444)
    }
    bodyTypeSpecId(){
        return this.jokerSpecSpan(9839)
    }
    featuresDiv(specType){
        return cy.get("#"+specType)
    }
    sourceId(){
        return cy.get("#purchase_information_43")
    }
    invoiceNumberId(){
        return cy.get("#purchase_information_47")
    }
    taxId(){
        return cy.get("#purchase_information_51")
    }
    purchaseMileageId(){
        return cy.get("#purchase_information_53")
    }
    comments(){
        return cy.get("#purchase_information_55")
    }
    createBillOfSale(){
        return cy.get("button[class='ant-btn ant-btn-default'] span").click()
    }
}

export default InventoryPage