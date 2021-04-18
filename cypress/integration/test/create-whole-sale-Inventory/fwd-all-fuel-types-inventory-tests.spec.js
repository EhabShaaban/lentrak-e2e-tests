/// <reference types="Cypress" />

import CreateInventoryPage from '../../page/create-inventory-page'
import DashboardPage from '../../page/dashboard-page'
import Utils from '../../utils/utils'

const utils = new Utils

const dashboardPage = new DashboardPage()
const createInv = new CreateInventoryPage()

let loginCredentials
let inventoryData
let inventoryVIN

// write python script to go over generated vins and make sure
// all json values is valid vin & remove empty vins 'caused by
// vin website latency and update vin.json with needed data
describe('Create new FWD inventory with multiple fuel types test suite', function() {

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

    it('Create FWD, gasoline fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
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
        createInv.automaticDiv().click()
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

    it('Create FWD, diesel fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[1]).type('{enter}')
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
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.diesel).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.automaticDiv().click()
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

    it('Create FWD, flex fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[2]).type('{enter}')
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
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.flex).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.automaticDiv().click()
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

    it('Create FWD, hybrid fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[3]).type('{enter}')
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
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.hybrid).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.automaticDiv().click()
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

    it('Create FWD, electric fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[4]).type('{enter}')
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
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.electric).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.automaticDiv().click()
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

    it('Create FWD, alternate fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[5]).type('{enter}')
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
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.alternate).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.automaticDiv().click()
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

    it('Create FWD, other fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
        createInv.vinId().type(inventoryVIN[6]).type('{enter}')
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
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.other).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.automaticDiv().click()
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
})