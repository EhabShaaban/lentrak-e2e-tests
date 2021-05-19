import CreateInventoryPage from '../../../page/create-inventory-page'

const createInventory = new CreateInventoryPage()
const vinGenerator = require('vin-generator');

/**
 * This should create general info section
 * for an inventory based on provided options
 * 
 * impacted page create-inventory-page.js
 * 
 * accepting generalInfo as an argument with the following values
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
    generalInfo
}) => {

    createInventory.typeVin(vinGenerator.generateVin())

    createInventory.typeListingPrice(generalInfo.listingPrice)

    createInventory.listingMileageId().type(generalInfo.listingMileage)

    createInventory.cityFuelEcoId().type(generalInfo.cityFuelEco)

    createInventory.highwayFuelEcoId().type(generalInfo.highwayFuelEco)

    createInventory.passengersId().type(generalInfo.passengers)

    createInventory.combinedFuelEcoId().type(generalInfo.combinedFuelEco)

    createInventory.engineDisplacementId().type(generalInfo.engineDisplacement)
    
}