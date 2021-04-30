/// <reference types="Cypress" />

import DashboardPage from '../../../page/dashboard-page'
import Utils from '../../../utils/utils'
import CreateInventoryPage from '../../../page/create-inventory-page'
import createInventoryDrivetrain from '../../helpers/create-inventorty/inventory-drivetrain'
import createInventoryTransmission from '../../helpers/create-inventorty/inventory-transmission'
import createInventoryGeneralInfo from '../../helpers/create-inventorty/inventory-general-info'
import createInventoryPurchaseInfo from '../../helpers/create-inventorty/inventory-purchase-info'
import selectColorsAndDoors from '../../helpers/create-inventorty/inventory-colors-and-doors'

const dashboardPage = new DashboardPage()
const createInventory = new CreateInventoryPage()
const utils = new Utils()

let inventoryData

describe('new whole-sale, 4wd suite', function() {

    before(() => {
        cy.fixture('new_inventory_data').then(inv => inventoryData = inv)
    })

    beforeEach(function(){

        cy.visit('/')
        utils.login(Cypress.env('username'), Cypress.env('passwd'))
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')

        cy.visit('./inventory/create')

        createInventoryGeneralInfo({
            listingMileage     : inventoryData.generalInfo.listingMileage,
            cityFuelEco        : inventoryData.generalInfo.drivetrain.cityFuelEconomy,
            highwayFuelEco     : inventoryData.generalInfo.transmission.highwayFuelEconomy,
            passengers         : inventoryData.generalInfo.numberOfDoors.passengers,
            combinedFuelEco    : inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            listingPrice       : inventoryData.generalInfo.ListingPrice
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

    })

    //////////////////////////////////////////////////////////////////////////////////
    //                          TESTS STARTS FROM HERE                              //
    //////////////////////////////////////////////////////////////////////////////////

    it('create 4wd, gasoline, automatic, cy3, sedan, exterior white, \
        interior grey, two doors, features: airConditioning, alarm, alloyWheels, \
        bluetooth, dualClimateControl, entertainmentPackage and fogLights', function(){

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.sedan,
        })

        selectColorsAndDoors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.white,
            interiorColor : inventoryData.generalInfo.interiorColor.grey,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.two
        })
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.airConditioning)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alarm)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alloyWheels)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.bluetooth)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.dualClimateControl)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.fogLights)
        
    })

    it('create 4wd, flex, automatic, cy6, convertible, exterior beige, \
        interior brown, three doors, features: heatedMirror, memorySeat, alloyWheels, \
        powerMirrors, towPackage, entertainmentPackage and navigationSystem', function(){

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.convertible,
        })

        selectColorsAndDoors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.beige,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three
        })

        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.memorySeat)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alloyWheels)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerMirrors)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.towPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.navigationSystem)
        
    })

    it('create 4wd, gasoline, manual, cy3, van, exterior lightBlue, \
        interior white, two doors, features: powerWindows, heatedSeats, entertainmentPackage, \
        powerLocks, alloyWheels, xeonHeadlights and airConditioning', function(){

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.van,
        })

        selectColorsAndDoors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.lightBlue,
            interiorColor : inventoryData.generalInfo.interiorColor.white,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.two

        })

        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerWindows)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerLocks)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alloyWheels)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.xeonHeadlights)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.airConditioning)
        
    })

    it('create 4wd, hybrid, automatic, cy5, wagon, exterior yellow, \
        interior grey, five doors, features: bluetooth, heatedSeats, powerSeats, \
        fogLights, towPackage, sunroof and stabilityControl', function(){

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.hybrid,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy5,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.wagon,
        })

        selectColorsAndDoors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.yellow,
            interiorColor : inventoryData.generalInfo.interiorColor.grey,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.five
        })

        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.bluetooth)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.fogLights)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.towPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.sunroof)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.stabilityControl)
        
    })

    it('create 4wd, electric, manual, cy6, crossover, exterior gold, \
        interior black, four doors, features: powerMirrors, heatedSeats, entertainmentPackage, \
        alarm, sunroof, powerSeats and powerLocks', function(){

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.electric,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.crossover,
        })

        selectColorsAndDoors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.gold,
            interiorColor : inventoryData.generalInfo.interiorColor.black,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.four
        })

        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerMirrors)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alarm)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.sunroof)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerLocks)
        
    })

    it('create 4wd, diesel, automatic, cy10, pickupTruck, exterior maroon, \
        interior brown, three doors, features: dualClimateControl, alloyWheels, heatedMirror, \
        memorySeat, powerSeats, stabilityControl and towPackage', function(){

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.diesel,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.pickupTruck,
        })

        selectColorsAndDoors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.maroon,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three
            
        })

        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.dualClimateControl)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alloyWheels)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.memorySeat)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.stabilityControl)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.towPackage)
        
    })

    it('create 4wd, flex, manual, cy10, sedan, exterior orange, \
        interior black, three doors, features: sunroof, powerLocks, powerWindows, \
        stabilityControl, xeonHeadlights, alarm and dualClimateControl', function(){

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.sedan,
        })

        selectColorsAndDoors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.orange,
            interiorColor : inventoryData.generalInfo.interiorColor.black,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three
            
        })

        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.sunroof)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerLocks)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerWindows)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.stabilityControl)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.xeonHeadlights)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alarm)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.dualClimateControl)
        
    })

    it('create 4wd, hybrid, manual, cy3, hatchback, exterior silver, \
        interior brown, other doors, features: dualClimateControl, entertainmentPackage, \
        fogLights, heatedMirror, heatedSeats, keylessEntry and navigationSystem', function(){

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.hybrid,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.hatchback,
        })

        selectColorsAndDoors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.silver,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.other
        })

        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.dualClimateControl)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.fogLights)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.keylessEntry)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.navigationSystem)
        
    })

    it('create 4wd, diesel, automatic, cy6, coupe, exterior beige, \
    interior brown, four doors, features: sunroof, fogLights, powerLocks \
    alarm, navigationSystem, heatedMirror and towPackage', function(){

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.diesel,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.coupe,
        })

        selectColorsAndDoors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.beige,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.four
        })

        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.sunroof)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.fogLights)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerLocks)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alarm)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.navigationSystem)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.towPackage)
        
    })

    it('create 4wd, alternate, manual, cy8, suv, exterior purple, \
        interior brown,  other doors, features: bluetooth, heatedMirror, \
        entertainmentPackage, powerLocks, powerWindows, powerSeats and sunroof', function(){

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.alternate,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy8,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.suv,
        })

        selectColorsAndDoors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.purple,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.other
        })

        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.bluetooth)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerLocks)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerWindows)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.sunroof)
        
    })

    it('create 4wd, flex, automatic, cy6, convertible, exterior brown, \
        interior grey,  three doors, features: alloyWheels, bluetooth, \
        towPackage, powerWindows, memorySeat, heatedMirror and navigationSystem', function(){

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.convertible,
        })

        selectColorsAndDoors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.brown,
            interiorColor : inventoryData.generalInfo.interiorColor.grey,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three
        })

        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alloyWheels)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.bluetooth)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.towPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerWindows)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.memorySeat)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.navigationSystem)
        
    })
})