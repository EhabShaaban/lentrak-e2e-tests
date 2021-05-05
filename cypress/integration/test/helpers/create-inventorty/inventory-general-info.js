import CreateInventoryPage from '../../../page/create-inventory-page'

const createInventory = new CreateInventoryPage()
const vinGenerator = require('vin-generator');

/**
 * This should create general info section
 * for an inventory based on provided options
 * 
 * impacted page create-inventory-page.js
 * 
 * @typedef CreateInventoryGeneralInfoParams
 * @property {String} listingMileage
 * @property {String} cityFuelEco
 * @property {String} highwayFuelEco
 * @property {String} passengers
 * @property {String} combinedFuelEco
 * @property {String} engineDisplacement
 * @property {String} listingPrice
 * 
 * @param {CreateInventoryGeneralInfo} listingMileage       - Inventory's listing mileage
 * @param {CreateInventoryGeneralInfo} cityFuelEco          - Inventory's city fuel economy
 * @param {CreateInventoryGeneralInfo} highwayFuelEco       - Inventory's highway fuel economy
 * @param {CreateInventoryGeneralInfo} passengers           - Inventory's passengers number
 * @param {CreateInventoryGeneralInfo} combinedFuelEco      - Inventory's combined economy value
 * @param {CreateInventoryGeneralInfo} engineDisplacement   - Inventory's engine displacement value
 * @param {CreateInventoryGeneralInfo} listingPrice         - Inventory's listing price
 */
module.exports = ({
    listingMileage,
    cityFuelEco,
    highwayFuelEco,
    passengers,
    combinedFuelEco,
    engineDisplacement,
    listingPrice,
}) => {

    createInventory.typeVin(vinGenerator.generateVin())

    createInventory.typeListingPrice(listingPrice)

    createInventory.listingMileageId().type(listingMileage)

    createInventory.cityFuelEcoId().type(cityFuelEco)

    createInventory.highwayFuelEcoId().type(highwayFuelEco)

    createInventory.passengersId().type(passengers)

    createInventory.combinedFuelEcoId().type(combinedFuelEco)

    createInventory.engineDisplacementId().type(engineDisplacement)
    
}