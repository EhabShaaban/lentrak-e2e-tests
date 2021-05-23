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
}

export default InventoryPage