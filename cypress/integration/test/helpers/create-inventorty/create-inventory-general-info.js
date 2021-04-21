import CreateInventoryPage from '../../../page/create-inventory-page'

const createInv = new CreateInventoryPage()

/**
 * This should create general info section
 * for an inventory based on provided options
 * 
 * impacted page create-inventory-page.js
 * 
 * @typedef CreateInventoryGeneralInfo
 * @property {String} listingMileage
 * @property {String} cityFuelEco
 * @property {String} highwayFuelEco
 * @property {String} passengers
 * @property {String} combinedFuelEco
 * @property {String} engineDisplacement
 * 
 * @param {CreateInventoryGeneralInfo} listingMileage       - Inventory's listing mileage
 * @param {CreateInventoryGeneralInfo} cityFuelEco          - Inventory's city fuel economy
 * @param {CreateInventoryGeneralInfo} highwayFuelEco       - Inventory's highway fuel economy
 * @param {CreateInventoryGeneralInfo} passengers           - Inventory's passengers number
 * @param {CreateInventoryGeneralInfo} combinedFuelEco      - Inventory's combined economy value
 * @param {CreateInventoryGeneralInfo} engineDisplacement   - Inventory's engine displacement value
 */

module.exports = ({
    listingMileage,
    cityFuelEco,
    highwayFuelEco,
    passengers,
    combinedFuelEco,
    engineDisplacement,
}) => {

    createInv.listingMileageId().type(listingMileage)

    createInv.exteriorColorDiv().click()

    createInv.interiorColorColorDiv().click()

    for(var i=0; i<=5;i++){
        createInv.featuresDiv(i).click()
    }

    createInv.cityFuelEcoId().type(cityFuelEco)

    createInv.highwayFuelEcoId().type(highwayFuelEco)

    createInv.passengersId().type(passengers)

    createInv.combinedFuelEcoId().type(combinedFuelEco)

    createInv.engineDisplacementId().type(engineDisplacement)
    
}