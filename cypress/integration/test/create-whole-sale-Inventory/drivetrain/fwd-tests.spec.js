/// <reference types="Cypress" />

import {adaptToReduxPersist} from '../../../utils/redux'
import CreateInventoryPage from '../../../page/create-inventory-page'
import Utils from '../../../utils/utils'
import createInventoryGeneralInfo from '../../helpers/create-inventorty/inventory-general-info'
import createInventoryPurchaseInfo from '../../helpers/create-inventorty/inventory-purchase-info'
import createInventoryCore from '../../helpers/create-inventorty/inventory-core'
import assertInventory from '../../helpers/create-inventorty/assert-inventory'

describe('new whole-sale, fwd suite', function() {

    const createInventoryPage = new CreateInventoryPage()
    const utils = new Utils()
    const vinGenerator = require('vin-generator');

    let inventoryData
    let loginCredentials
    let inventory = {}

    before(function() {
        cy.fixture('new_inventory_data').then(function(inv) {inventoryData = inv})

        cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWD")).then(function(creds) {loginCredentials = creds})
    })

    beforeEach(function(){

        cy.visit('./inventory/create', {
            onBeforeLoad (win) {
                win.localStorage.setItem('persist:root', adaptToReduxPersist(loginCredentials))
            }
        })

        createInventoryPage.decodeBtn().should('have.text', 'Decode')

        let inventoryGeneralInfo = {
            listingMileage     : inventoryData.generalInfo.listingMileage,
            cityFuelEco        : inventoryData.generalInfo.drivetrain.cityFuelEconomy,
            highwayFuelEco     : inventoryData.generalInfo.transmission.highwayFuelEconomy,
            passengers         : inventoryData.generalInfo.numberOfDoors.passengers,
            combinedFuelEco    : inventoryData.generalInfo.numberOfDoors.combinedFuelEconomy,
            engineDisplacement : inventoryData.generalInfo.drivetrain.engineDisplacement,
            listingPrice       : inventoryData.generalInfo.ListingPrice,
            vin                : vinGenerator.generateVin()
        }

        createInventoryGeneralInfo({
            generalInfo : inventoryGeneralInfo
        })

        inventory.generalInfo = inventoryGeneralInfo
    })

    afterEach(function(){

        let inventoryPurchaseInfo ={ 
            source           : inventoryData.purchaseInfo.source.wholeSale,
            vendor           : inventoryData.purchaseInfo.vendor,
            purchasePrice    : inventoryData.purchaseInfo.purchasePrice,
            purchaseMileage  : inventoryData.purchaseInfo.purchaseMileage,
            purchaseInvoice  : inventoryData.purchaseInfo.purchaseInvoice,
            purchaseComments : inventoryData.purchaseInfo.comments
        }

        createInventoryPurchaseInfo({
            purchaseInfo : inventoryPurchaseInfo
        })

        inventory.purchaseInfo = inventoryPurchaseInfo
        
        assertInventory({inventory:inventory})

        inventory = {}

        utils.logout();

    })

    //////////////////////////////////////////////////////////////////////////////////
    //                          TESTS STARTS FROM HERE                              //
    //////////////////////////////////////////////////////////////////////////////////

    it('create fwd, gasoline, automatic, cy3, sedan, exterior white, \
        interior grey, two doors, features: airConditioning, alarm, alloyWheels, \
        bluetooth, dualClimateControl, entertainmentPackage and fogLights', function(){

        const features = [
            inventoryData.generalInfo.featuresAndSpecs.airConditioning,
            inventoryData.generalInfo.featuresAndSpecs.alarm,
            inventoryData.generalInfo.featuresAndSpecs.alloyWheels,
            inventoryData.generalInfo.featuresAndSpecs.bluetooth,
            inventoryData.generalInfo.featuresAndSpecs.dualClimateControl,
            inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage,
            inventoryData.generalInfo.featuresAndSpecs.fogLights,
        ];

        let inventoryCore = {
            features      : features,
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
            gearType      : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders     : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType      : inventoryData.generalInfo.transmission.bodyType.sedan,
            exteriorColor : inventoryData.generalInfo.exteriorColors.white,
            interiorColor : inventoryData.generalInfo.interiorColor.grey,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.two
        };

        createInventoryCore({
            inventoryCore : inventoryCore
        })

        inventory.inventoryCore = inventoryCore

    })

    it('create fwd, flex, automatic, cy6, convertible, exterior beige, \
        interior brown, three doors, features: heatedMirror, memorySeat, alloyWheels, \
        powerMirrors, towPackage, entertainmentPackage and navigationSystem', function(){

        const features = [
            inventoryData.generalInfo.featuresAndSpecs.heatedMirror,
            inventoryData.generalInfo.featuresAndSpecs.memorySeat,
            inventoryData.generalInfo.featuresAndSpecs.alloyWheels,
            inventoryData.generalInfo.featuresAndSpecs.powerMirrors,
            inventoryData.generalInfo.featuresAndSpecs.towPackage,
            inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage,
            inventoryData.generalInfo.featuresAndSpecs.navigationSystem,
        ];

        let inventoryCore = {
            features      : features,
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
            gearType      : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders     : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType      : inventoryData.generalInfo.transmission.bodyType.convertible,
            exteriorColor : inventoryData.generalInfo.exteriorColors.beige,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three
        }

        createInventoryCore({
            inventoryCore : inventoryCore
        })

        inventory.inventoryCore = inventoryCore

    })

    /**
     * Bugged flow
     */
    // it('create fwd, gasoline, manual, cy3, van, exterior lightBlue, \
    //     interior white, two doors, features: powerWindows, heatedSeats, entertainmentPackage, \
    //     powerLocks, alloyWheels, xeonHeadlights and airConditioning', function(){

    //     const features = [
    //         inventoryData.generalInfo.featuresAndSpecs.powerWindows,
    //         inventoryData.generalInfo.featuresAndSpecs.heatedSeats,
    //         inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage,
    //         inventoryData.generalInfo.featuresAndSpecs.powerLocks,
    //         inventoryData.generalInfo.featuresAndSpecs.alloyWheels,
    //         inventoryData.generalInfo.featuresAndSpecs.xeonHeadlights,
    //         inventoryData.generalInfo.featuresAndSpecs.airConditioning,
    //     ];

    //     let inventoryCore = {
    //         features      : features,
    //         inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fwd,
    //         fuelType      : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
    //         gearType      : inventoryData.generalInfo.transmission.gearType.manual,
    //         cylinders     : inventoryData.generalInfo.transmission.cylinders.cy3,
    //         bodyType      : inventoryData.generalInfo.transmission.bodyType.van,
    //         exteriorColor : inventoryData.generalInfo.exteriorColors.lightBlue,
    //         interiorColor : inventoryData.generalInfo.interiorColor.white,
    //         numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.two
    //     }

    //     createInventoryCore({
    //         inventoryCore : inventoryCore
    //     })

    //     inventory.inventoryCore = inventoryCore
        
    // })

    it('create fwd, hybrid, automatic, cy5, wagon, exterior yellow, \
        interior grey, five doors, features: bluetooth, heatedSeats, powerSeats, \
        fogLights, towPackage, sunroof and stabilityControl', function(){

        const features = [
            inventoryData.generalInfo.featuresAndSpecs.bluetooth,
            inventoryData.generalInfo.featuresAndSpecs.heatedSeats,
            inventoryData.generalInfo.featuresAndSpecs.powerSeats,
            inventoryData.generalInfo.featuresAndSpecs.fogLights,
            inventoryData.generalInfo.featuresAndSpecs.towPackage,
            inventoryData.generalInfo.featuresAndSpecs.sunroof,
            inventoryData.generalInfo.featuresAndSpecs.stabilityControl,
        ];

        let inventoryCore = {
            features      : features,
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.hybrid,
            gearType      : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders     : inventoryData.generalInfo.transmission.cylinders.cy5,
            bodyType      : inventoryData.generalInfo.transmission.bodyType.wagon,
            exteriorColor : inventoryData.generalInfo.exteriorColors.yellow,
            interiorColor : inventoryData.generalInfo.interiorColor.grey,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.five
        }
        createInventoryCore({
            inventoryCore : inventoryCore
        })

        inventory.inventoryCore = inventoryCore

    })

    it('create fwd, electric, manual, cy6, crossover, exterior gold, \
        interior black, four doors, features: powerMirrors, heatedSeats, entertainmentPackage, \
        alarm, sunroof, powerSeats and powerLocks', function(){

        const features = [
            inventoryData.generalInfo.featuresAndSpecs.powerMirrors,
            inventoryData.generalInfo.featuresAndSpecs.heatedSeats,
            inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage,
            inventoryData.generalInfo.featuresAndSpecs.alarm,
            inventoryData.generalInfo.featuresAndSpecs.sunroof,
            inventoryData.generalInfo.featuresAndSpecs.powerSeats,
            inventoryData.generalInfo.featuresAndSpecs.powerLocks,
        ];

        let inventoryCore = {
            features      : features,
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.electric,
            gearType      : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders     : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType      : inventoryData.generalInfo.transmission.bodyType.crossover,
            exteriorColor : inventoryData.generalInfo.exteriorColors.gold,
            interiorColor : inventoryData.generalInfo.interiorColor.black,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.four
        }

        createInventoryCore({
            inventoryCore : inventoryCore
        })

        inventory.inventoryCore = inventoryCore
        
    })

    /**
     * Bugged flow
     */
    // it('create fwd, diesel, automatic, cy10, pickupTruck, exterior maroon, \
    //     interior brown, three doors, features: dualClimateControl, alloyWheels, heatedMirror, \
    //     memorySeat, powerSeats, stabilityControl and towPackage', function(){

    //     const features = [
    //         inventoryData.generalInfo.featuresAndSpecs.dualClimateControl,
    //         inventoryData.generalInfo.featuresAndSpecs.alloyWheels,
    //         inventoryData.generalInfo.featuresAndSpecs.heatedMirror,
    //         inventoryData.generalInfo.featuresAndSpecs.memorySeat,
    //         inventoryData.generalInfo.featuresAndSpecs.powerSeats,
    //         inventoryData.generalInfo.featuresAndSpecs.stabilityControl,
    //         inventoryData.generalInfo.featuresAndSpecs.towPackage,
    //     ];

    //     let inventoryCore = {
    //         features      : features,
    //         inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fwd,
    //         fuelType      : inventoryData.generalInfo.drivetrain.fuelType.diesel,
    //         gearType      : inventoryData.generalInfo.transmission.gearType.automatic,
    //         cylinders     : inventoryData.generalInfo.transmission.cylinders.cy10,
    //         bodyType      : inventoryData.generalInfo.transmission.bodyType.pickupTruck,
    //         exteriorColor : inventoryData.generalInfo.exteriorColors.maroon,
    //         interiorColor : inventoryData.generalInfo.interiorColor.brown,
    //         numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three
    //     }

    //     createInventoryCore({
    //         inventoryCore : inventoryCore  
    //     })

    //     inventory.inventoryCore = inventoryCore
        
    // })

    /**
     * Bugged flow
     */
    // it('create fwd, flex, manual, cy10, sedan, exterior orange, \
    //     interior black, three doors, features: sunroof, powerLocks, powerWindows, \
    //     stabilityControl, xeonHeadlights, alarm and dualClimateControl', function(){

    //     const features = [
    //         inventoryData.generalInfo.featuresAndSpecs.sunroof,
    //         inventoryData.generalInfo.featuresAndSpecs.powerLocks,
    //         inventoryData.generalInfo.featuresAndSpecs.powerWindows,
    //         inventoryData.generalInfo.featuresAndSpecs.stabilityControl,
    //         inventoryData.generalInfo.featuresAndSpecs.xeonHeadlights,
    //         inventoryData.generalInfo.featuresAndSpecs.alarm,
    //         inventoryData.generalInfo.featuresAndSpecs.dualClimateControl,
    //     ];

    //     let inventoryCore = {
    //         features      : features,
    //         inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fwd,
    //         fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
    //         gearType      : inventoryData.generalInfo.transmission.gearType.manual,
    //         cylinders     : inventoryData.generalInfo.transmission.cylinders.cy10,
    //         bodyType      : inventoryData.generalInfo.transmission.bodyType.sedan,
    //         exteriorColor : inventoryData.generalInfo.exteriorColors.orange,
    //         interiorColor : inventoryData.generalInfo.interiorColor.black,
    //         numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three
    //     }

    //     createInventoryCore({
    //         inventoryCore : inventoryCore

    //     })

    //     inventory.inventoryCore = inventoryCore

    // })

    it('create fwd, hybrid, manual, cy3, hatchback, exterior silver, \
        interior brown, other doors, features: dualClimateControl, entertainmentPackage, \
        fogLights, heatedMirror, heatedSeats, keylessEntry and navigationSystem', function(){

        const features = [
            inventoryData.generalInfo.featuresAndSpecs.dualClimateControl,
            inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage,
            inventoryData.generalInfo.featuresAndSpecs.fogLights,
            inventoryData.generalInfo.featuresAndSpecs.heatedMirror,
            inventoryData.generalInfo.featuresAndSpecs.heatedSeats,
            inventoryData.generalInfo.featuresAndSpecs.keylessEntry,
            inventoryData.generalInfo.featuresAndSpecs.navigationSystem,
        ];

        let inventoryCore = {
            features      : features,
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.hybrid,
            gearType      : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders     : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType      : inventoryData.generalInfo.transmission.bodyType.hatchback,
            exteriorColor : inventoryData.generalInfo.exteriorColors.silver,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.other
        }

        createInventoryCore({
            inventoryCore : inventoryCore
        })

        inventory.inventoryCore = inventoryCore

    })

    it('create fwd, diesel, automatic, cy6, coupe, exterior beige, \
    interior brown, four doors, features: sunroof, fogLights, powerLocks \
    alarm, navigationSystem, heatedMirror and towPackage', function(){

        const features = [
            inventoryData.generalInfo.featuresAndSpecs.sunroof,
            inventoryData.generalInfo.featuresAndSpecs.fogLights,
            inventoryData.generalInfo.featuresAndSpecs.powerLocks,
            inventoryData.generalInfo.featuresAndSpecs.alarm,
            inventoryData.generalInfo.featuresAndSpecs.navigationSystem,
            inventoryData.generalInfo.featuresAndSpecs.heatedMirror,
            inventoryData.generalInfo.featuresAndSpecs.towPackage,
        ];

        let inventoryCore = {
            features      : features,
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.diesel,
            gearType      : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders     : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType      : inventoryData.generalInfo.transmission.bodyType.coupe,
            exteriorColor : inventoryData.generalInfo.exteriorColors.beige,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.four
        }

        createInventoryCore({
            inventoryCore : inventoryCore
        })

        inventory.inventoryCore = inventoryCore

    })

    it('create fwd, alternate, manual, cy8, suv, exterior purple, \
        interior brown,  other doors, features: bluetooth, heatedMirror, \
        entertainmentPackage, powerLocks, powerWindows, powerSeats and sunroof', function(){

        const features = [
            inventoryData.generalInfo.featuresAndSpecs.bluetooth,
            inventoryData.generalInfo.featuresAndSpecs.heatedMirror,
            inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage,
            inventoryData.generalInfo.featuresAndSpecs.powerLocks,
            inventoryData.generalInfo.featuresAndSpecs.powerWindows,
            inventoryData.generalInfo.featuresAndSpecs.powerSeats,
            inventoryData.generalInfo.featuresAndSpecs.sunroof,
        ];

        let inventoryCore = {
            features      : features,
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.alternate,
            gearType      : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders     : inventoryData.generalInfo.transmission.cylinders.cy8,
            bodyType      : inventoryData.generalInfo.transmission.bodyType.suv,
            exteriorColor : inventoryData.generalInfo.exteriorColors.purple,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.other
        }

        createInventoryCore({
            inventoryCore : inventoryCore
        })

        inventory.inventoryCore = inventoryCore

    })

    it('create fwd, flex, automatic, cy6, convertible, exterior brown, \
        interior grey,  three doors, features: alloyWheels, bluetooth, \
        towPackage, powerWindows, memorySeat, heatedMirror and navigationSystem', function(){

        const features = [
            inventoryData.generalInfo.featuresAndSpecs.alloyWheels,
            inventoryData.generalInfo.featuresAndSpecs.bluetooth,
            inventoryData.generalInfo.featuresAndSpecs.towPackage,
            inventoryData.generalInfo.featuresAndSpecs.powerWindows,
            inventoryData.generalInfo.featuresAndSpecs.memorySeat,
            inventoryData.generalInfo.featuresAndSpecs.heatedMirror,
            inventoryData.generalInfo.featuresAndSpecs.navigationSystem,
        ];

        let inventoryCore = {
            features      : features,
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
            gearType      : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders     : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType      : inventoryData.generalInfo.transmission.bodyType.convertible,
            exteriorColor : inventoryData.generalInfo.exteriorColors.brown,
            interiorColor : inventoryData.generalInfo.interiorColor.grey,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three
        };

        createInventoryCore({
            inventoryCore : inventoryCore
        })
        
        inventory.inventoryCore = inventoryCore
        
    })
})