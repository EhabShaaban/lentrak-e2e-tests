/// <reference types="Cypress" />

import DashboardPage from '../../../page/dashboard-page'
import Utils from '../../../utils/utils'
import CreateInventoryPage from '../../../page/create-inventory-page'
import createInventoryDrivetrain from '../../helpers/create-inventorty/create-inventory-drivetrain'
import createInventoryTransmission from '../../helpers/create-inventorty/create-inventory-transmission'
import createInventoryGeneralInfo from '../../helpers/create-inventorty/create-inventory-general-info'
import createInventoryPurchaseInfo from '../../helpers/create-inventorty/create-inventory-purchase-info'
import createInventoryColors from '../../helpers/create-inventorty/create-inventory-colors'

const dashboardPage = new DashboardPage()
const createInventory = new CreateInventoryPage()
const utils = new Utils()

let inventoryData

let vinGenerator = require('vin-generator');

describe('new whole-sale, rwd suite', function() {

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

        // utils.logout();

    })

    //////////////////////////////////////////////////////////////////////////////////
    //                          TESTS STARTS FROM HERE                              //
    //////////////////////////////////////////////////////////////////////////////////

    it('create rwd, gasoline, automatic, cy3, sedan, exterior white, \
        interior grey, two doors, features: airConditioning, alarm, alloyWheels, \
        bluetooth, dualClimateControl, entertainmentPackage and fogLights', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.rwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.sedan,
        })

        createInventoryColors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.white,
            interiorColor : inventoryData.generalInfo.interiorColor.grey
        })

        createInventory.selectDoorNumber(inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.two)
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.airConditioning)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alarm)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alloyWheels)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.bluetooth)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.dualClimateControl)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.fogLights)
        
    })

    it('create rwd, flex, automatic, cy6, convertible, exterior beige, \
        interior brown, three doors, features: heatedMirror, memorySeat, alloyWheels, \
        powerMirrors, towPackage, entertainmentPackage and navigationSystem', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.rwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.convertible,
        })

        createInventoryColors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.beige,
            interiorColor : inventoryData.generalInfo.interiorColor.brown
        })

        createInventory.selectDoorNumber(inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three)
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.memorySeat)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alloyWheels)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerMirrors)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.towPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.navigationSystem)
        
    })

    it('create rwd, gasoline, manual, cy3, van, exterior lightBlue, \
        interior white, two doors, features: powerWindows, heatedSeats, entertainmentPackage, \
        powerLocks, alloyWheels, xeonHeadlights and airConditioning', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.rwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.van,
        })

        createInventoryColors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.lightBlue,
            interiorColor : inventoryData.generalInfo.interiorColor.white
        })

        createInventory.selectDoorNumber(inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.two)
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerWindows)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerLocks)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alloyWheels)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.xeonHeadlights)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.airConditioning)
        
    })

    it('create rwd, hybrid, automatic, cy5, wagon, exterior yellow, \
        interior grey, five doors, features: bluetooth, heatedSeats, powerSeats, \
        fogLights, towPackage, sunroof and stabilityControl', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.rwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.hybrid,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy5,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.wagon,
        })

        createInventoryColors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.yellow,
            interiorColor : inventoryData.generalInfo.interiorColor.grey
        })

        createInventory.selectDoorNumber(inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.five)
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.bluetooth)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.fogLights)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.towPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.sunroof)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.stabilityControl)
        
    })

    it('create rwd, electric, manual, cy6, crossover, exterior gold, \
        interior black, four doors, features: powerMirrors, heatedSeats, entertainmentPackage, \
        alarm, sunroof, powerSeats and powerLocks', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.rwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.electric,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.crossover,
        })

        createInventoryColors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.gold,
            interiorColor : inventoryData.generalInfo.interiorColor.black
        })

        createInventory.selectDoorNumber(inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.four)
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerMirrors)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alarm)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.sunroof)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerLocks)
        
    })

    it('create rwd, diesel, automatic, cy10, pickupTruck, exterior maroon, \
        interior brown, three doors, features: dualClimateControl, alloyWheels, heatedMirror, \
        memorySeat, powerSeats, stabilityControl and towPackage', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.rwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.diesel,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.pickupTruck,
        })

        createInventoryColors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.maroon,
            interiorColor : inventoryData.generalInfo.interiorColor.brown
        })

        createInventory.selectDoorNumber(inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three)
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.dualClimateControl)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alloyWheels)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.memorySeat)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.stabilityControl)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.towPackage)
        
    })

    it('create rwd, flex, manual, cy10, sedan, exterior orange, \
        interior black, three doors, features: sunroof, powerLocks, powerWindows, \
        stabilityControl, xeonHeadlights, alarm and dualClimateControl', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.rwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.sedan,
        })

        createInventoryColors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.orange,
            interiorColor : inventoryData.generalInfo.interiorColor.black
        })

        createInventory.selectDoorNumber(inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three)
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.sunroof)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerLocks)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerWindows)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.stabilityControl)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.xeonHeadlights)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alarm)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.dualClimateControl)
        
    })

    it('create rwd, hybrid, manual, cy3, hatchback, exterior silver, \
        interior brown, other doors, features: dualClimateControl, entertainmentPackage, \
        fogLights, heatedMirror, heatedSeats, keylessEntry and navigationSystem', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.rwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.hybrid,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.hatchback,
        })

        createInventoryColors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.silver,
            interiorColor : inventoryData.generalInfo.interiorColor.brown
        })

        createInventory.selectDoorNumber(inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.other)
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.dualClimateControl)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.fogLights)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.keylessEntry)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.navigationSystem)
        
    })

    it('create rwd, diesel, automatic, cy6, coupe, exterior beige, \
    interior brown, four doors, features: sunroof, fogLights, powerLocks \
    alarm, navigationSystem, heatedMirror and towPackage', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.rwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.diesel,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.coupe,
        })

        createInventoryColors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.beige,
            interiorColor : inventoryData.generalInfo.interiorColor.brown
        })

        createInventory.selectDoorNumber(inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.four)
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.sunroof)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.fogLights)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerLocks)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alarm)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.navigationSystem)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.towPackage)
        
    })

    it('create rwd, alternate, manual, cy8, suv, exterior purple, \
        interior brown,  other doors, features: bluetooth, heatedMirror, \
        entertainmentPackage, powerLocks, powerWindows, powerSeats and sunroof', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.rwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.alternate,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy8,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.suv,
        })

        createInventoryColors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.purple,
            interiorColor : inventoryData.generalInfo.interiorColor.brown
        })

        createInventory.selectDoorNumber(inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.other)
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.bluetooth)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerLocks)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerWindows)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerSeats)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.sunroof)
        
    })

    it('create rwd, flex, automatic, cy6, convertible, exterior brown, \
        interior grey,  three doors, features: alloyWheels, bluetooth, \
        towPackage, powerWindows, memorySeat, heatedMirror and navigationSystem', function(){

        createInventory.typeVin(vinGenerator.generateVin())
        createInventory.typeListingPrice(inventoryData.generalInfo.ListingPrice)

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.rwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.convertible,
        })

        createInventoryColors({
            exteriorColor : inventoryData.generalInfo.exteriorColors.brown,
            interiorColor : inventoryData.generalInfo.interiorColor.grey
        })

        createInventory.selectDoorNumber(inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three)
        
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.alloyWheels)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.bluetooth)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.towPackage)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.powerWindows)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.memorySeat)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.heatedMirror)
        createInventory.selectFeature(inventoryData.generalInfo.featuresAndSpecs.navigationSystem)
        
    })
})