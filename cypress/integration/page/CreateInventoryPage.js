/// <reference types="Cypress" />

class CreateInventoryPage
{
    //1. General Information
    vin(){
        return cy.get("#vin")
    }
    stockNumber(){
        return cy.get("#stock_number")
    }
    mileage(){
        return cy.get("#mileage")
    }
    listingPrice(){
        return cy.get("input[data-testid='Listing Price']")
    }
    exteriorColor(){
        return cy.get("div[style='background-color: rgb(255, 255, 255); margin-right: 5px;']").eq(0)
    }
    interiorColorColor(){
        return cy.get("div[style='background-color: rgb(255, 255, 255); margin-right: 5px;']").eq(1)
    }
    // .eq(i) >> from 0 to 19 >> 20 total feature
    features(){
        return cy.get("div[style='color: rgb(87, 98, 117);']")
    }
    //Specs >> Drivetrain
    fourWd(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(0)
    }
    awd(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(1)
    }
    fwd(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(2)
    }
    rwd(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(3)
    }
    fuelType(){
        return cy.get("#fuel_type")
    }
    //Specs >> Transmission
    automatic(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(4)
    }
    manual(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(5)
    }
    cylinders(){
        return cy.get("#cylinders")
    }
    highwayFuelEco(){
        return cy.get("#highway_fuel_economy")
    }
    bodyType(){
        return cy.get("#body")
    }
    //Specs >> Number of Doors
    numberOfDoors2(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(6)
    }
    numberOfDoors3(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(7)
    }
    numberOfDoors4(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(8)
    }
    numberOfDoors5(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(9)
    }
    numberOfDoorsOther(){
        return cy.get("div[class='an-14 lh-20 regular-text flex-1 flex-x center px25 py10 cursor-pointer single-block dark-grey--text']").eq(10)
    }
    cityFuelEco(){
        return cy.get("#city_fuel_economy")
    }
    engineDisplacement(){
        return cy.get("#engine_displacement")
    }
    passengers(){
        return cy.get("#passengers")
    }
    combinedFuelEco(){
        return cy.get("#combined_fuel_economy")
    }
    //next btn to next page
    next(){
        return cy.get("button[type='submit']")
    }
    //2. Purchase Information
    source(){
        return cy.get("span[title='Whole-Sale']")
    }
    vendor(){
        return cy.get("#purchase_vendor")
    }
    purchaseMileage(){
        return cy.get("#purchase_mileage")
    }
    purchaseComments(){
        return cy.get("#purchase_coments")
    }
    purchasePrice(){
        return cy.get("input[class='input currency-input ant-input']")
    }
    purchaseInvoice(){
        return cy.get("#purchase_invoice")
    }
    save(){
        return cy.get("button[type='submit']")
    }
}

export default CreateInventoryPage