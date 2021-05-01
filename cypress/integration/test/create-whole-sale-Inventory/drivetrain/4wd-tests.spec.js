/// <reference types="Cypress" />

import DashboardPage from '../../../page/dashboard-page'
import Utils from '../../../utils/utils'
import createInventoryDrivetrain from '../../helpers/create-inventorty/inventory-drivetrain'
import createInventoryTransmission from '../../helpers/create-inventorty/inventory-transmission'
import createInventoryGeneralInfo from '../../helpers/create-inventorty/inventory-general-info'
import createInventoryPurchaseInfo from '../../helpers/create-inventorty/inventory-purchase-info'
import selectInventorySpecs from '../../helpers/create-inventorty/inventory-specs'

const dashboardPage = new DashboardPage()
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

        const features = [
            inventoryData.generalInfo.featuresAndSpecs.airConditioning,
            inventoryData.generalInfo.featuresAndSpecs.alarm,
            inventoryData.generalInfo.featuresAndSpecs.alloyWheels,
            inventoryData.generalInfo.featuresAndSpecs.bluetooth,
            inventoryData.generalInfo.featuresAndSpecs.dualClimateControl,
            inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage,
            inventoryData.generalInfo.featuresAndSpecs.fogLights,
        ];

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.sedan,
        })

        selectInventorySpecs({
            exteriorColor : inventoryData.generalInfo.exteriorColors.white,
            interiorColor : inventoryData.generalInfo.interiorColor.grey,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.two,
            features      : features
        })

    })

    it('create 4wd, flex, automatic, cy6, convertible, exterior beige, \
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

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.convertible,
        })

        selectInventorySpecs({
            exteriorColor : inventoryData.generalInfo.exteriorColors.beige,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three,
            features      : features
        })
        
    })

    it('create 4wd, gasoline, manual, cy3, van, exterior lightBlue, \
        interior white, two doors, features: powerWindows, heatedSeats, entertainmentPackage, \
        powerLocks, alloyWheels, xeonHeadlights and airConditioning', function(){

        const features = [
            inventoryData.generalInfo.featuresAndSpecs.powerWindows,
            inventoryData.generalInfo.featuresAndSpecs.heatedSeats,
            inventoryData.generalInfo.featuresAndSpecs.entertainmentPackage,
            inventoryData.generalInfo.featuresAndSpecs.powerLocks,
            inventoryData.generalInfo.featuresAndSpecs.alloyWheels,
            inventoryData.generalInfo.featuresAndSpecs.xeonHeadlights,
            inventoryData.generalInfo.featuresAndSpecs.airConditioning,
        ];

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.gasoline,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.van,
        })

        selectInventorySpecs({
            exteriorColor : inventoryData.generalInfo.exteriorColors.lightBlue,
            interiorColor : inventoryData.generalInfo.interiorColor.white,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.two,
            features      : features
        })
        
    })

    it('create 4wd, hybrid, automatic, cy5, wagon, exterior yellow, \
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

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.hybrid,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy5,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.wagon,
        })

        selectInventorySpecs({
            exteriorColor : inventoryData.generalInfo.exteriorColors.yellow,
            interiorColor : inventoryData.generalInfo.interiorColor.grey,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.five.CreateInventoryPage,
            features      : features
        })
        
    })

    it('create 4wd, electric, manual, cy6, crossover, exterior gold, \
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

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.electric,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.crossover,
        })

        selectInventorySpecs({
            exteriorColor : inventoryData.generalInfo.exteriorColors.gold,
            interiorColor : inventoryData.generalInfo.interiorColor.black,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.four,
            features      : features
        })
        
    })

    it('create 4wd, diesel, automatic, cy10, pickupTruck, exterior maroon, \
        interior brown, three doors, features: dualClimateControl, alloyWheels, heatedMirror, \
        memorySeat, powerSeats, stabilityControl and towPackage', function(){
        
        const features = [
            inventoryData.generalInfo.featuresAndSpecs.dualClimateControl,
            inventoryData.generalInfo.featuresAndSpecs.alloyWheels,
            inventoryData.generalInfo.featuresAndSpecs.heatedMirror,
            inventoryData.generalInfo.featuresAndSpecs.memorySeat,
            inventoryData.generalInfo.featuresAndSpecs.powerSeats,
            inventoryData.generalInfo.featuresAndSpecs.stabilityControl,
            inventoryData.generalInfo.featuresAndSpecs.towPackage,
        ];

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.diesel,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.pickupTruck,
        })

        selectInventorySpecs({
            exteriorColor : inventoryData.generalInfo.exteriorColors.maroon,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three,
            features      : features            
        })
        
    })

    it('create 4wd, flex, manual, cy10, sedan, exterior orange, \
        interior black, three doors, features: sunroof, powerLocks, powerWindows, \
        stabilityControl, xeonHeadlights, alarm and dualClimateControl', function(){

        const features = [
            inventoryData.generalInfo.featuresAndSpecs.sunroof,
            inventoryData.generalInfo.featuresAndSpecs.powerLocks,
            inventoryData.generalInfo.featuresAndSpecs.powerWindows,
            inventoryData.generalInfo.featuresAndSpecs.stabilityControl,
            inventoryData.generalInfo.featuresAndSpecs.xeonHeadlights,
            inventoryData.generalInfo.featuresAndSpecs.alarm,
            inventoryData.generalInfo.featuresAndSpecs.dualClimateControl,
        ];

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy10,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.sedan,
        })

        selectInventorySpecs({
            exteriorColor : inventoryData.generalInfo.exteriorColors.orange,
            interiorColor : inventoryData.generalInfo.interiorColor.black,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three,
            features      : features            
        })
        
    })

    it('create 4wd, hybrid, manual, cy3, hatchback, exterior silver, \
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

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.hybrid,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy3,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.hatchback,
        })

        selectInventorySpecs({
            exteriorColor : inventoryData.generalInfo.exteriorColors.silver,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.other,
            features      : features
        })
        
    })

    it('create 4wd, diesel, automatic, cy6, coupe, exterior beige, \
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

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.diesel,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.coupe,
        })

        selectInventorySpecs({
            exteriorColor : inventoryData.generalInfo.exteriorColors.beige,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.four,
            features      : features
        })
        
    })

    it('create 4wd, alternate, manual, cy8, suv, exterior purple, \
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

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.alternate,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.manual,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy8,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.suv,
        })

        selectInventorySpecs({
            exteriorColor : inventoryData.generalInfo.exteriorColors.purple,
            interiorColor : inventoryData.generalInfo.interiorColor.brown,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.other,
            features      : features
        })
        
    })

    it('create 4wd, flex, automatic, cy6, convertible, exterior brown, \
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

        createInventoryDrivetrain({
            inventoryType : inventoryData.generalInfo.drivetrain.drivetrainTypes.fourwd,
            fuelType      : inventoryData.generalInfo.drivetrain.fuelType.flex,
        })

        createInventoryTransmission({
            gearType  : inventoryData.generalInfo.transmission.gearType.automatic,
            cylinders : inventoryData.generalInfo.transmission.cylinders.cy6,
            bodyType  : inventoryData.generalInfo.transmission.bodyType.convertible,
        })

        selectInventorySpecs({
            exteriorColor : inventoryData.generalInfo.exteriorColors.brown,
            interiorColor : inventoryData.generalInfo.interiorColor.grey,
            numberOfDoors : inventoryData.generalInfo.numberOfDoors.numberOfDoorsValue.three,
            features      : features
        })
        
    })
})