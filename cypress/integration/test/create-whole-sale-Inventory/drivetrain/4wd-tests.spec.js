/// <reference types="Cypress" />

import createInventoryGeneralInfo from '../../helpers/create-inventory-general-info'
import createInventoryPurchaseInfo from '../../helpers/create-inventory-purchase-information'
import CreateInventoryPage from '../../../page/create-inventory-page'
import DashboardPage from '../../../page/dashboard-page'
import Utils from '../../../utils/utils'

const createInv = new CreateInventoryPage()
const dashboardPage = new DashboardPage()
const utils = new Utils

let loginCredentials
let inventoryData
let inventoryVIN

/**
 * TODO: write python script to process vin.json
 */

describe('New whole-sale, 4WD inventories with variant fuel types suite', function() {

    before(() => {
        cy.fixture('login_credentials').then(cred => loginCredentials = cred)
        cy.fixture('new_inventory_data').then(inv => inventoryData = inv)
        cy.fixture('vin').then(vin => inventoryVIN = vin)
    })

    beforeEach(function(){
        cy.visit('/')
        utils.login(loginCredentials.qa.username, loginCredentials.qa.passwd)
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        dashboardPage.arrowImg().click()
        dashboardPage.settingsLi().click()
        dashboardPage.dateConfigInput().click()
        dashboardPage.saveConfigBtn().click()
        cy.visit('./inventory/create')
        createInv.selectInventoryType("4wd");
        createInv.selectDoors(2)
    })

    it('Create 4WD, gasoline fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
        
        createInventoryGeneralInfo({
            vin                : inventoryVIN[0],
            listingPrice       : inventoryData.generalInfo.listingMileage,
            listingMileage     : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
            cityFuelEco        : inventoryData.generalInfo.drivetrain.cityFuelEconomy,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy3,
            highwayFuelEco     : inventoryData.generalInfo.transmission.highwayFuelEconomy,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.sedan,
            passengers         : inventoryData.generalInfo.numberOfDoors.passengers,
            combinedFuelEco    : inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy,
        })

        createInv.selectGear("automatic")
        createInv.nextBtn().click()
        
        createInventoryPurchaseInfo({
            source           : inventoryData.purchaseInfo.source.wholeSale,
            vendor           : inventoryData.purchaseInfo.vendor,
            purchasePrice    : inventoryData.purchaseInfo.purchasePrice,
            purchaseMileage  : inventoryData.purchaseInfo.purchaseMileage,
            purchaseInvoice  : inventoryData.purchaseInfo.purchaseInvoice,
            purchaseComments : inventoryData.purchaseInfo.comments,
        })

        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('Create 4WD, diesel fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
        
        createInventoryGeneralInfo({
            vin                : inventoryVIN[1],
            listingPrice       : inventoryData.generalInfo.listingMileage,
            listingMileage     : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.diesel,
            cityFuelEco        : inventoryData.generalInfo.drivetrain.cityFuelEconomy,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy3,
            highwayFuelEco     : inventoryData.generalInfo.transmission.highwayFuelEconomy,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.sedan,
            passengers         : inventoryData.generalInfo.numberOfDoors.passengers,
            combinedFuelEco    : inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy,
        })

        createInv.selectGear("manual")
        createInv.nextBtn().click()
        
        createInventoryPurchaseInfo({
            source           : inventoryData.purchaseInfo.source.wholeSale,
            vendor           : inventoryData.purchaseInfo.vendor,
            purchasePrice    : inventoryData.purchaseInfo.purchasePrice,
            purchaseMileage  : inventoryData.purchaseInfo.purchaseMileage,
            purchaseInvoice  : inventoryData.purchaseInfo.purchaseInvoice,
            purchaseComments : inventoryData.purchaseInfo.comments,
        })
    })

    // it('Create 4WD, flex fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
    //     createInv.vinId().type(inventoryVIN[2]).type('{enter}')
    //     createInv.decodeBtn().click()
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
    //     createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy3).type('{enter}')
    //     createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
    //     createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
    //     //
    //     createInv.numberOfDoors2Div().click()
    //     createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
    //     createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy).type('{enter}')
    //     //
    //     createInv.nextBtn().click()
    //     createInv.sourceSpan().click({force: true})
    //     createInv.sourceSpan().type(inventoryData.purchaseInfo.source.wholeSale).type('{enter}')
    //     createInv.vendorId().type(inventoryData.purchaseInfo.vendor).type('{enter}')
    //     createInv.purchasePriceInput().click({force: true})
    //     createInv.purchasePriceInput().type(inventoryData.purchaseInfo.purchasePrice)
    //     createInv.purchaseMileageId().type(inventoryData.purchaseInfo.purchaseMileage)
    //     createInv.purchaseInvoiceId().type(inventoryData.purchaseInfo.purchaseInvoice)
    //     createInv.purchaseCommentsId().type(inventoryData.purchaseInfo.comments)
    //     var purchaseTax = inventoryData.purchaseInfo.purchasePrice * 0.13;
    //     purchaseTax = purchaseTax.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    //     createInv.purchaseTaxInput().should('have.value', purchaseTax)
    //     // createInv.saveBtn().click()
    //     // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
    //     // createInv.successMsgDiv().then(($text) => {
    //     //     const stockNumber = $text.text().slice(-9);
    //     //     cy.visit('./inventory/'+stockNumber)
    //     //     //from here make sure to assert on newly created inventory data
    //     // });
    // })

    // it('Create 4WD, hybrid fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
    //     createInv.vinId().type(inventoryVIN[3]).type('{enter}')
    //     createInv.decodeBtn().click()
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
    //     createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy3).type('{enter}')
    //     createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
    //     createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
    //     //
    //     createInv.numberOfDoors2Div().click()
    //     createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
    //     createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy).type('{enter}')
    //     //
    //     createInv.nextBtn().click()
    //     createInv.sourceSpan().click({force: true})
    //     createInv.sourceSpan().type(inventoryData.purchaseInfo.source.wholeSale).type('{enter}')
    //     createInv.vendorId().type(inventoryData.purchaseInfo.vendor).type('{enter}')
    //     createInv.purchasePriceInput().click({force: true})
    //     createInv.purchasePriceInput().type(inventoryData.purchaseInfo.purchasePrice)
    //     createInv.purchaseMileageId().type(inventoryData.purchaseInfo.purchaseMileage)
    //     createInv.purchaseInvoiceId().type(inventoryData.purchaseInfo.purchaseInvoice)
    //     createInv.purchaseCommentsId().type(inventoryData.purchaseInfo.comments)
    //     var purchaseTax = inventoryData.purchaseInfo.purchasePrice * 0.13;
    //     purchaseTax = purchaseTax.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    //     createInv.purchaseTaxInput().should('have.value', purchaseTax)
    //     // createInv.saveBtn().click()
    //     // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
    //     // createInv.successMsgDiv().then(($text) => {
    //     //     const stockNumber = $text.text().slice(-9);
    //     //     cy.visit('./inventory/'+stockNumber)
    //     //     //from here make sure to assert on newly created inventory data
    //     // });
    // })

    // it('Create 4WD, electric fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
    //     createInv.vinId().type(inventoryVIN[4]).type('{enter}')
    //     createInv.decodeBtn().click()
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
    //     createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy3).type('{enter}')
    //     createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
    //     createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
    //     //
    //     createInv.numberOfDoors2Div().click()
    //     createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
    //     createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy).type('{enter}')
    //     //
    //     createInv.nextBtn().click()
    //     createInv.sourceSpan().click({force: true})
    //     createInv.sourceSpan().type(inventoryData.purchaseInfo.source.wholeSale).type('{enter}')
    //     createInv.vendorId().type(inventoryData.purchaseInfo.vendor).type('{enter}')
    //     createInv.purchasePriceInput().click({force: true})
    //     createInv.purchasePriceInput().type(inventoryData.purchaseInfo.purchasePrice)
    //     createInv.purchaseMileageId().type(inventoryData.purchaseInfo.purchaseMileage)
    //     createInv.purchaseInvoiceId().type(inventoryData.purchaseInfo.purchaseInvoice)
    //     createInv.purchaseCommentsId().type(inventoryData.purchaseInfo.comments)
    //     var purchaseTax = inventoryData.purchaseInfo.purchasePrice * 0.13;
    //     purchaseTax = purchaseTax.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    //     createInv.purchaseTaxInput().should('have.value', purchaseTax)
    //     // createInv.saveBtn().click()
    //     // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
    //     // createInv.successMsgDiv().then(($text) => {
    //     //     const stockNumber = $text.text().slice(-9);
    //     //     cy.visit('./inventory/'+stockNumber)
    //     //     //from here make sure to assert on newly created inventory data
    //     // });
    // })

    // it('Create 4WD, alternate fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
    //     createInv.vinId().type(inventoryVIN[5]).type('{enter}')
    //     createInv.decodeBtn().click()
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
    //     createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy3).type('{enter}')
    //     createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
    //     createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
    //     //
    //     createInv.numberOfDoors2Div().click()
    //     createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
    //     createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy).type('{enter}')
    //     //
    //     createInv.nextBtn().click()
    //     createInv.sourceSpan().click({force: true})
    //     createInv.sourceSpan().type(inventoryData.purchaseInfo.source.wholeSale).type('{enter}')
    //     createInv.vendorId().type(inventoryData.purchaseInfo.vendor).type('{enter}')
    //     createInv.purchasePriceInput().click({force: true})
    //     createInv.purchasePriceInput().type(inventoryData.purchaseInfo.purchasePrice)
    //     createInv.purchaseMileageId().type(inventoryData.purchaseInfo.purchaseMileage)
    //     createInv.purchaseInvoiceId().type(inventoryData.purchaseInfo.purchaseInvoice)
    //     createInv.purchaseCommentsId().type(inventoryData.purchaseInfo.comments)
    //     var purchaseTax = inventoryData.purchaseInfo.purchasePrice * 0.13;
    //     purchaseTax = purchaseTax.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    //     createInv.purchaseTaxInput().should('have.value', purchaseTax)
    //     // createInv.saveBtn().click()
    //     // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
    //     // createInv.successMsgDiv().then(($text) => {
    //     //     const stockNumber = $text.text().slice(-9);
    //     //     cy.visit('./inventory/'+stockNumber)
    //     //     //from here make sure to assert on newly created inventory data
    //     // });
    // })

    // it('Create 4WD, other fuel, automatic, 3 cylinders, sedan type, 2 doors', function(){
    //     createInv.vinId().type(inventoryVIN[6]).type('{enter}')
    //     createInv.decodeBtn().click()
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
    //     createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders.cy3).type('{enter}')
    //     createInv.highwayFuelEcoId().type(inventoryData.generalInfo.transmission.highwayFuelEconomy)
    //     createInv.bodyTypeId().type(inventoryData.generalInfo.transmission.bodyType.sedan).type('{enter}')
    //     //
    //     createInv.numberOfDoors2Div().click()
    //     createInv.passengersId().type(inventoryData.generalInfo.numberOfDoors.passengers)
    //     createInv.combinedFuelEcoId().type(inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy).type('{enter}')
    //     //
    //     createInv.nextBtn().click()
    //     createInv.sourceSpan().click({force: true})
    //     createInv.sourceSpan().type(inventoryData.purchaseInfo.source.wholeSale).type('{enter}')
    //     createInv.vendorId().type(inventoryData.purchaseInfo.vendor).type('{enter}')
    //     createInv.purchasePriceInput().click({force: true})
    //     createInv.purchasePriceInput().type(inventoryData.purchaseInfo.purchasePrice)
    //     createInv.purchaseMileageId().type(inventoryData.purchaseInfo.purchaseMileage)
    //     createInv.purchaseInvoiceId().type(inventoryData.purchaseInfo.purchaseInvoice)
    //     createInv.purchaseCommentsId().type(inventoryData.purchaseInfo.comments)
    //     var purchaseTax = inventoryData.purchaseInfo.purchasePrice * 0.13;
    //     purchaseTax = purchaseTax.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    //     createInv.purchaseTaxInput().should('have.value', purchaseTax)
    //     // createInv.saveBtn().click()
    //     // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
    //     // createInv.successMsgDiv().then(($text) => {
    //     //     const stockNumber = $text.text().slice(-9);
    //     //     cy.visit('./inventory/'+stockNumber)
    //     //     //from here make sure to assert on newly created inventory data
    //     // });
    // })
})