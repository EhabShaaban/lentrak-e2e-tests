/// <reference types="Cypress" />

import DashboardPage from '../../../page/dashboard-page'
import Utils from '../../../utils/utils'
import CreateInventoryPage from '../../../page/create-inventory-page'
import createInventoryDrivetrain from '../../helpers/create-inventorty/create-inventory-drivetrain'
import createInventoryTransmission from '../../helpers/create-inventorty/create-inventory-transmission'
import createInventoryGeneralInfo from '../../helpers/create-inventorty/create-inventory-general-info'
import createInventoryPurchaseInfo from '../../helpers/create-inventorty/create-inventory-purchase-info'

const dashboardPage = new DashboardPage()
const createInventory = new CreateInventoryPage()
const utils = new Utils()

let loginCredentials
let inventoryData

let vinGenerator = require('vin-generator')

describe('new whole-sale, rwd suite, focusing on changing drivetrain', function() {

    before(() => {
        cy.fixture('login_credentials').then(cred => loginCredentials = cred)
        cy.fixture('new_inventory_data').then(inv => inventoryData = inv)
    })

    beforeEach(function(){

        cy.visit('/')
        utils.login(loginCredentials.qa.username, loginCredentials.qa.passwd)
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')

        cy.visit('./inventory/create')

        createInventoryGeneralInfo({
            listingMileage     : inventoryData.generalInfo.listingMileage,
            cityFuelEco        : inventoryData.generalInfo.drivetrain.cityFuelEconomy,
            highwayFuelEco     : inventoryData.generalInfo.transmission.highwayFuelEconomy,
            passengers         : inventoryData.generalInfo.numberOfDoors.passengers,
            combinedFuelEco    : inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement
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

        utils.logout();
        
        // createInv.saveBtn().click()
        // createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')
        // createInv.successMsgDiv().then(($text) => {
        //     const stockNumber = $text.text().slice(-9);
        //     cy.visit('./inventory/'+stockNumber)
        //     //from here make sure to assert on newly created inventory data
        // });
    })

    it('create rwd, gasoline, automatic, cy3, sedan, 2 doors', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : "rwd",
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
        })

        createInventoryTransmission({
            gearType  : "automatic",
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.sedan,
        })

        createInventory.selectDoorNumber(2)
        
    })

    it('create rwd, flex, automatic, cy6, convertible, 3 doors', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : "rwd",
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : "automatic",
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.convertible,
        })

        createInventory.selectDoorNumber(3)
        
    })

    it('create rwd, gasoline, manual, cy3, van, 2 doors', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : "rwd",
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.electric,
        })

        createInventoryTransmission({
            gearType  : "manual",
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.van,
        })

        createInventory.selectDoorNumber(4)
        
    })

    it('create rwd, hybrid, automatic, cy5, wagon, 5 doors', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : "rwd",
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.hybrid,
        })

        createInventoryTransmission({
            gearType  : "automatic",
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy5,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.wagon,
        })

        createInventory.selectDoorNumber(5)
        
    })

    it('create rwd, electric, manual, cy6, crossover, 4 doors', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : "rwd",
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.electric,
        })

        createInventoryTransmission({
            gearType  : "manual",
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.crossover,
        })

        createInventory.selectDoorNumber(4)
        
    })

    it('create rwd, diesel, automatic, cy10, pickupTruck, 3 doors', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : "rwd",
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.diesel,
        })

        createInventoryTransmission({
            gearType  : "automatic",
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.pickupTruck,
        })

        createInventory.selectDoorNumber(3)
        
    })

    it('create rwd, flex, manual, c10, sedan, 2 doors', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : "rwd",
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : "manual",
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.sedan,
        })

        createInventory.selectDoorNumber(2)
        
    })

    it('create rwd, hybrid, manual, cy3, hatchback, 3 doors', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : "rwd",
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.hybrid,
        })

        createInventoryTransmission({
            gearType  : "manual",
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.hatchback,
        })

        createInventory.selectDoorNumber(3)
        
    })

    it('create rwd, diesel, automatic, cy6, coupe, 4 doors', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : "rwd",
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.diesel,
        })

        createInventoryTransmission({
            gearType  : "automatic",
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.coupe,
        })

        createInventory.selectDoorNumber(4)
        
    })

    it('create rwd, alternate, manual, cy8, suv, 2 doors', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : "rwd",
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.alternate,
        })

        createInventoryTransmission({
            gearType  : "manual",
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy8,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.suv,
        })

        createInventory.selectDoorNumber(2)
        
    })

    it('create rwd, flex, automatic, cy6, convertible, 5 doors', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : "rwd",
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : "automatic",
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.convertible,
        })

        createInventory.selectDoorNumber(5)
        
    })
})