import CreateInventoryPage from '../../page/create-inventory-page'

const createInv = new CreateInventoryPage()

/**
 * This should create general info. section 
 * for an inventory based on provided options
 * 
 * @typedef CreateInventoryGeneralInfoParams
 * @property {String} vin
 * @property {String} listingMileage
 * @property {String} listingPrice
 * @property {String} fuelType
 * @property {String} cityFuelEco
 * @property {String} engineDisplacement
 * @property {String} cylinders
 * @property {String} highwayFuelEco
 * @property {String} bodyType
 * @property {String} passengers
 * @property {String} combinedFuelEco
 * 
 * @param {CreateInventoryGeneralInfoParams} vin                - Inventory's vin code
 * @param {CreateInventoryGeneralInfoParams} listingMileage     - Inventory's listing mileage
 * @param {CreateInventoryGeneralInfoParams} listingPrice       - Inventory's listing price
 * @param {CreateInventoryGeneralInfoParams} fuelType           - Inventory's fuel type
 * @param {CreateInventoryGeneralInfoParams} cityFuelEco        - Inventory's city fuel value
 * @param {CreateInventoryGeneralInfoParams} engineDisplacement - Inventory's engine displacement
 * @param {CreateInventoryGeneralInfoParams} cylinders          - Inventory's cylinder's number
 * @param {CreateInventoryGeneralInfoParams} highwayFuelEco     - Inventory's highway fuel value
 * @param {CreateInventoryGeneralInfoParams} bodyType           - Inventory's body type
 * @param {CreateInventoryGeneralInfoParams} passengers         - Inventory's passengers number
 * @param {CreateInventoryGeneralInfoParams} combinedFuelEco    - Inventory's combined fuel value
 */

module.exports = ({
    vin,
    listingMileage,
    listingPrice,
    fuelType,
    cityFuelEco,
    engineDisplacement,
    cylinders,
    highwayFuelEco,
    bodyType,
    passengers,
    combinedFuelEco,
}) => {
    createInv.vinId().type(vin).type('{enter}')

    createInv.decodeBtn().click()

    createInv.listingMileageId().type(listingMileage)

    createInv.listingPriceInput().type(listingPrice)

    createInv.exteriorColorDiv().click()

    createInv.interiorColorColorDiv().click()

    for(var i=0; i<=5;i++){
        createInv.featuresDiv(i).click()
    }

    createInv.fuelTypeId().type(fuelType).type('{enter}')

    createInv.cityFuelEcoId().type(cityFuelEco)

    createInv.engineDisplacementId().type(engineDisplacement)

    createInv.cylindersId().type(cylinders).type('{enter}')

    createInv.highwayFuelEcoId().type(highwayFuelEco)

    createInv.bodyTypeId().type(bodyType).type('{enter}')
    
    createInv.numberOfDoors2Div().click()

    createInv.passengersId().type(passengers)

    createInv.combinedFuelEcoId().type(combinedFuelEco)
}