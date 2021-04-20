/// <reference types="Cypress" />

import createInventoryGeneralDynamicInfo from '../../helpers/create-inventory-general-dynamic-info'
import createInventoryGeneralStaticInfo from '../../helpers/create-inventory-general-static-info'
import createInventoryPurchaseInfo from '../../helpers/create-inventory-purchase-info'
import DashboardPage from '../../../page/dashboard-page'
import Utils from '../../../utils/utils'

const dashboardPage = new DashboardPage()
const utils = new Utils

let loginCredentials
let inventoryData
let inventoryVIN

/**
 * TODO: write python script to process vin.json
 */

describe('new whole-sale, 4wd suite', function() {

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
        createInventoryGeneralStaticInfo({
            listingMileage   : inventoryData.generalInfo.listingMileage,
            cityFuelEco      : inventoryData.generalInfo.drivetrain.cityFuelEconomy,
            highwayFuelEco   : inventoryData.generalInfo.transmission.highwayFuelEconomy,
            passengers       : inventoryData.generalInfo.numberOfDoors.passengers,
            combinedFuelEco  : inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy,
        })
    })

    afterEach(function(){
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

    it('create 4wd, 2 doors, automatic, gasoline, cy3, sedan', function(){
        createInventoryGeneralDynamicInfo({
            doorNumber         : 2,
            inventoryType      : "4wd",
            gearType           : "automatic",
            vin                : inventoryVIN[0],
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.sedan,
        })
    })

    it('create 4wd, 3 doors, manual, diesel, cy10, van', function(){
        createInventoryGeneralDynamicInfo({
            doorNumber         : 3,
            inventoryType      : "4wd",
            gearType           : "manual",
            vin                : inventoryVIN[1],
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.diesel,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.van,
        })
    })

    it('create 4wd, 5 doors, manual, gasoline, cy12, wagon', function(){
        createInventoryGeneralDynamicInfo({
            doorNumber         : 5,
            inventoryType      : "4wd",
            gearType           : "manual",
            vin                : inventoryVIN[2],
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy12,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.wagon,
        })
    })

    it('create 4wd, 4 doors, automatic, alternate, cy5, suv', function(){
        createInventoryGeneralDynamicInfo({
            doorNumber         : 4,
            inventoryType      : "4wd",
            gearType           : "automatic",
            vin                : inventoryVIN[3],
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.alternate,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy5,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.suv,
        })
    })

    it('create 4wd, 2 doors, manual, electric, cy6, minivan', function(){
        createInventoryGeneralDynamicInfo({
            doorNumber         : 2,
            inventoryType      : "4wd",
            gearType           : "manual",
            vin                : inventoryVIN[4],
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.electric,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.minivan,
        })
    })

    it('create 4wd, 3 doors, automatic, hybrid, cy8, hatchback', function(){
        createInventoryGeneralDynamicInfo({
            doorNumber         : 3,
            inventoryType      : "4wd",
            gearType           : "automatic",
            vin                : inventoryVIN[5],
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.hybrid,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy8,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.hatchback,
        })
    })

    it('create 4wd, 2 doors, automatic, electric, cy10, pickupTruck', function(){
        createInventoryGeneralDynamicInfo({
            doorNumber         : 2,
            inventoryType      : "4wd",
            gearType           : "automatic",
            vin                : inventoryVIN[6],
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.electric,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.pickupTruck,
        })
    })

    it('create 4wd, 5 doors, manual, gasoline, cy3, coupe', function(){
        createInventoryGeneralDynamicInfo({
            doorNumber         : 5,
            inventoryType      : "4wd",
            gearType           : "manual",
            vin                : inventoryVIN[7],
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.coupe,
        })
    })

    it('create 4wd, 2 doors, automatic, flex, cy6, convertible', function(){
        createInventoryGeneralDynamicInfo({
            doorNumber         : 2,
            inventoryType      : "4wd",
            gearType           : "automatic",
            vin                : inventoryVIN[8],
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.flex,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.convertible,
        })
    })

    it('create 4wd, 3 doors, manual, electric, cy10, sedan', function(){
        createInventoryGeneralDynamicInfo({
            doorNumber         : 3,
            inventoryType      : "4wd",
            gearType           : "manual",
            vin                : inventoryVIN[9],
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.electric,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.sedan,
        })
    })

    it('create 4wd, 2 doors, automatic, diesel, cy4, wagon', function(){
        createInventoryGeneralDynamicInfo({
            doorNumber         : 2,
            inventoryType      : "4wd",
            gearType           : "automatic",
            vin                : inventoryVIN[10],
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            fuelType           : inventoryData.generalInfo.drivetrain.fuelType.diesel,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            cylinders          : inventoryData.generalInfo.transmission.cylinders.cy4,
            bodyType           : inventoryData.generalInfo.transmission.bodyType.wagon,
        })
    })
})