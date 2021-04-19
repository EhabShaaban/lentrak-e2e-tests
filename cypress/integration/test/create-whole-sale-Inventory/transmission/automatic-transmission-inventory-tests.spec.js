/// <reference types="Cypress" />

import CreateInventoryPage from '../../../page/create-inventory-page'
import DashboardPage from '../../../page/dashboard-page'
import Utils from '../../../utils/utils'

const utils = new Utils

const dashboardPage = new DashboardPage()
const createInv = new CreateInventoryPage()

let loginCredentials
let inventoryData
let inventoryVIN

describe('New inventories with transmission coverage focusing on sedan with diff cylinders test suite', function() {

    before(() => {
        cy.fixture('login_credentials').then(cred => loginCredentials = cred)
        cy.fixture('new_inventory_data').then(inv => inventoryData = inv)
        cy.fixture('vin').then(vin => inventoryVIN = vin)
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
    })

    it('Create 4WD, gasoline fuel, manual, 3 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
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
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy3).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create 4WD, gasoline fuel, manual, 4 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
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
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy4).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create 4WD, gasoline fuel, manual, 5 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
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
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy5).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create 4WD, gasoline fuel, manual, 6 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
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
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy6).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create 4WD, gasoline fuel, manual, 8 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
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
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy8).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create 4WD, gasoline fuel, manual, 10 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
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
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy10).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create 4WD, gasoline fuel, manual, 12 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
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
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy12).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })
})


describe('New inventories with transmission coverage focusing on coupe with diff cylinders test suite', function() {

    before(() => {
        cy.fixture('login_credentials').then(cred => loginCredentials = cred)
        cy.fixture('new_inventory_data').then(inv => inventoryData = inv)
        cy.fixture('vin').then(vin => inventoryVIN = vin)
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
    })

    it('Create AWD, gasoline fuel, manual, 3 cylinders, coupe type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.awdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy3).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.coupe).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create AWD, gasoline fuel, manual, 4 cylinders, coupe type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.awdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy4).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.coupe).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create AWD, gasoline fuel, manual, 5 cylinders, coupe type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.awdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy5).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.coupe).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create AWD, gasoline fuel, manual, 6 cylinders, coupe type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.awdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy6).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.coupe).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create AWD, gasoline fuel, manual, 8 cylinders, coupe type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.awdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy8).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.coupe).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create AWD, gasoline fuel, manual, 10 cylinders, coupe type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.awdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy10).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.coupe).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create AWD, gasoline fuel, manual, 12 cylinders, coupe type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.awdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy12).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.coupe).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })
})

describe('New inventories with transmission coverage focusing on hatchback  with diff cylinders test suite', function() {

    before(() => {
        cy.fixture('login_credentials').then(cred => loginCredentials = cred)
        cy.fixture('new_inventory_data').then(inv => inventoryData = inv)
        cy.fixture('vin').then(vin => inventoryVIN = vin)
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
    })

    it('Create FWD, gasoline fuel, manual, 3 cylinders, hatchback type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.fwdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy3).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.hatchback).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create FWD, gasoline fuel, manual, 4 cylinders, hatchback type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.fwdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy4).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.hatchback).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create FWD, gasoline fuel, manual, 5 cylinders, hatchback type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.fwdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy5).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.hatchback).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create FWD, gasoline fuel, manual, 6 cylinders, hatchback type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.fwdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy6).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.hatchback).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create FWD, gasoline fuel, manual, 8 cylinders, hatchback type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.fwdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy8).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.hatchback).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create FWD, gasoline fuel, manual, 10 cylinders, hatchback type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.fwdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy10).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.hatchback).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create FWD, gasoline fuel, manual, 12 cylinders, hatchback type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[0]).type('{enter}')
        createInv.decodeBtn().click()
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        //
        createInv.fwdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.manualDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy12).type('{enter}')
        createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
        createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.hatchback).type('{enter}')
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
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })
})