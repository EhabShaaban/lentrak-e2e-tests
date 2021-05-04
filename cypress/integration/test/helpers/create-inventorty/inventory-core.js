import createInventoryDrivetrain from '../../helpers/create-inventorty/inventory-drivetrain'
import createInventoryTransmission from '../../helpers/create-inventorty/inventory-transmission'
import selectInventorySpecs from '../../helpers/create-inventorty/inventory-specs'


/**
 * This should create inventory core specifications
 * for an inventory based on provided options
 * 
 * impacted page create-inventory-page.js
 * 
 * @typedef CreateInventoryCoreParams
 * @property {String} inventoryType
 * @property {String} fuelType
 * @property {String} gearType
 * @property {String} cylinders
 * @property {String} bodyType
 * @property {String} exteriorColor
 * @property {String} interiorColor
 * @property {String} numberOfDoors
 * 
 * @param {CreateInventoryCore} inventoryType  - Inventory's type
 * @param {CreateInventoryCore} fuelType       - Inventory's fuel type
 * @param {CreateInventoryCore} gearType     - Inventory's gear type
 * @param {CreateInventoryCore} cylinders    - Inventory's cylinders
 * @param {CreateInventoryCore} bodyType     - Inventory's body type
 * @param {CreateInventoryCore} exteriorColor    - Inventory's exterior color
 * @param {CreateInventoryCore} interiorColor    - Inventory's interior color
 * @param {CreateInventoryCore} numberOfDoors    - Inventory's number of doors
 */
module.exports =({
    inventoryType,
    fuelType,
    gearType,
    cylinders,
    bodyType,
    exteriorColor,
    interiorColor,
    numberOfDoors,
    features
}) => {

    createInventoryDrivetrain({
        inventoryType : inventoryType,
        fuelType      : fuelType
    })

    createInventoryTransmission({
        gearType      : gearType,
        cylinders     : cylinders,
        bodyType      : bodyType
    })

    selectInventorySpecs({
        exteriorColor : exteriorColor,
        interiorColor : interiorColor,
        numberOfDoors : numberOfDoors,
        features      : features,
    })
}