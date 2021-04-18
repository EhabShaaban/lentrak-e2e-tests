/// <reference types="Cypress" />

import CreateInventoryPage from '../../page/create-inventory-page'
import DashboardPage from '../../page/dashboard-page'
import Utils from '../../utils/utils'

const utils = new Utils

const dashboardPage = new DashboardPage()
const createInv = new CreateInventoryPage()

let loginCredentials
let inventoryData

describe('Create new 4WD inventory with multiple fuel types test suite', function() {

    before(() => {
        cy.fixture('login_credentials').then(cred => loginCredentials = cred)
        cy.fixture('new_inventory_data').then(inv => inventoryData = inv)
        })

    beforeEach(function(){
        cy.visit('/')
        utils.login(loginCredentials.dev.username, loginCredentials.dev.passwd)
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        dashboardPage.arrowImg().click()
        dashboardPage.settingsLi().click()
        dashboardPage.dateConfigInput().click()
        dashboardPage.saveConfigBtn().click()
        cy.visit('./inventory/create')
        // cy.exec("node ./cypress/integration/utils/vin-puppeteer.js")
    })

    it('Create 4WD, gasoline fuel, automatic, 8 cylinders, sedan type & 2 doors', function(){
        createInv.vinId().type(inventoryData.generalInfo.vin).type('{enter}')
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.fourWdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.automaticDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders[4]).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
        //
        createInv.numberOfDoors2Div().click()
        createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
        createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy).type('{enter}')
        //
        createInv.nextBtn().click()
        createInv.sourceSpan().click({force: true})
        createInv.sourceSpan().type(inventoryData.purchaseInfo.source.wholeSale).type('{enter}')
        createInv.vendorId().type(inventoryData.purchaseInfo.vendor).type('{enter}')
        createInv.purchasePriceInput().click({force: true})
        createInv.purchasePriceInput().type(inventoryData.purchaseInfo.purchasePrice)
        createInv.purchaseMileageId().type(inventoryData.purchaseInfo.purchaseMileage)
        createInv.purchaseInvoiceId().type(inventoryData.purchaseInfo.purchaseInvoice)
        createInv.purchaseCommentsId().type(inventoryData.purchaseInfo.comments)
        var purchaseTax = inventoryData.purchaseInfo.purchasePrice * 0.13;
        purchaseTax = purchaseTax.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        createInv.purchaseTaxInput().should('have.value', purchaseTax)
    })

    // it('Create 4WD, diesel fuel, automatic, 8 cylinders, sedan type & 2 doors', function(){
    //     createInv.vinId().type(inventoryData.generalInfo.vin).type('{enter}')
    //     createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
    //     createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
    //     createInv.exteriorColorDiv().click()
    //     createInv.interiorColorColorDiv().click()
    //     for(var i=0; i<=5;i++){
    //         createInv.featuresDiv(i).click()
    //     }
    //     //
    //     createInv.fourWdDiv().click()
    //     createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.diesel).type('{enter}')
    //     createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
    //     createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
    //     //
    //     createInv.automaticDiv().click()
    //     createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders[4]).type('{enter}')
    //     createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
    //     createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
    //     //
    //     createInv.numberOfDoors2Div().click()
    //     createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
    //     createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy)
    //     //
    // })

    // it('Create 4WD, flex fuel, automatic, 8 cylinders, sedan type & 2 doors', function(){
    //     createInv.vinId().type(inventoryData.generalInfo.vin).type('{enter}')
    //     createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
    //     createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
    //     createInv.exteriorColorDiv().click()
    //     createInv.interiorColorColorDiv().click()
    //     for(var i=0; i<=5;i++){
    //         createInv.featuresDiv(i).click()
    //     }
    //     //
    //     createInv.fourWdDiv().click()
    //     createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.flex).type('{enter}')
    //     createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
    //     createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
    //     //
    //     createInv.automaticDiv().click()
    //     createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders[4]).type('{enter}')
    //     createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
    //     createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
    //     //
    //     createInv.numberOfDoors2Div().click()
    //     createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
    //     createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy)
    //     //
    // })

    // it('Create 4WD, hybrid fuel, automatic, 8 cylinders, sedan type & 2 doors', function(){
    //     createInv.vinId().type(inventoryData.generalInfo.vin).type('{enter}')
    //     createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
    //     createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
    //     createInv.exteriorColorDiv().click()
    //     createInv.interiorColorColorDiv().click()
    //     for(var i=0; i<=5;i++){
    //         createInv.featuresDiv(i).click()
    //     }
    //     //
    //     createInv.fourWdDiv().click()
    //     createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.hybrid).type('{enter}')
    //     createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
    //     createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
    //     //
    //     createInv.automaticDiv().click()
    //     createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders[4]).type('{enter}')
    //     createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
    //     createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
    //     //
    //     createInv.numberOfDoors2Div().click()
    //     createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
    //     createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy)
    //     //
    // })

    // it('Create 4WD, electric fuel, automatic, 8 cylinders, sedan type & 2 doors', function(){
    //     createInv.vinId().type(inventoryData.generalInfo.vin).type('{enter}')
    //     createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
    //     createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
    //     createInv.exteriorColorDiv().click()
    //     createInv.interiorColorColorDiv().click()
    //     for(var i=0; i<=5;i++){
    //         createInv.featuresDiv(i).click()
    //     }
    //     //
    //     createInv.fourWdDiv().click()
    //     createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.electric).type('{enter}')
    //     createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
    //     createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
    //     //
    //     createInv.automaticDiv().click()
    //     createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders[4]).type('{enter}')
    //     createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
    //     createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
    //     //
    //     createInv.numberOfDoors2Div().click()
    //     createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
    //     createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy)
    //     //
    // })

    // it('Create 4WD, alternate fuel, automatic, 8 cylinders, sedan type & 2 doors', function(){
    //     createInv.vinId().type(inventoryData.generalInfo.vin).type('{enter}')
    //     createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
    //     createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
    //     createInv.exteriorColorDiv().click()
    //     createInv.interiorColorColorDiv().click()
    //     for(var i=0; i<=5;i++){
    //         createInv.featuresDiv(i).click()
    //     }
    //     //
    //     createInv.fourWdDiv().click()
    //     createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.alternate).type('{enter}')
    //     createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
    //     createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
    //     //
    //     createInv.automaticDiv().click()
    //     createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders[4]).type('{enter}')
    //     createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
    //     createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
    //     //
    //     createInv.numberOfDoors2Div().click()
    //     createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
    //     createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy)
    //     //
    // })

    // it('Create 4WD, other fuel, automatic, 8 cylinders, sedan type & 2 doors', function(){
    //     createInv.vinId().type(inventoryData.generalInfo.vin).type('{enter}')
    //     createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
    //     createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
    //     createInv.exteriorColorDiv().click()
    //     createInv.interiorColorColorDiv().click()
    //     for(var i=0; i<=5;i++){
    //         createInv.featuresDiv(i).click()
    //     }
    //     //
    //     createInv.fourWdDiv().click()
    //     createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.other).type('{enter}')
    //     createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
    //     createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
    //     //
    //     createInv.automaticDiv().click()
    //     createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders[4]).type('{enter}')
    //     createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
    //     createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
    //     //
    //     createInv.numberOfDoors2Div().click()
    //     createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
    //     createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy)
    //     //
    // })
})