import createInventoryDrivetrain from '../../helpers/create-inventorty/inventory-drivetrain'
import createInventoryTransmission from '../../helpers/create-inventorty/inventory-transmission'
import selectInventorySpecs from '../../helpers/create-inventorty/inventory-specs'


/**
 * This should create inventory core specifications
 * for an inventory based on provided options
 * 
 * impacted page create-inventory-page.js
 * 
 * accepting inventoryCore object as an argument with the following values
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
 * @property {List} features
 * 
 * @param {CreateInventoryCore} inventoryType    - Inventory's type
 * @param {CreateInventoryCore} fuelType         - Inventory's fuel type
 * @param {CreateInventoryCore} gearType         - Inventory's gear type
 * @param {CreateInventoryCore} cylinders        - Inventory's cylinders
 * @param {CreateInventoryCore} bodyType         - Inventory's body type
 * @param {CreateInventoryCore} exteriorColor    - Inventory's exterior color
 * @param {CreateInventoryCore} interiorColor    - Inventory's interior color
 * @param {CreateInventoryCore} numberOfDoors    - Inventory's number of doors
 * @param {CreateInventoryCore} features         - Inventory's list of features
 */
module.exports =({
    inventoryCore
}) => {

    createInventoryDrivetrain({
        inventoryType : inventoryCore.inventoryType,
        fuelType      : inventoryCore.fuelType
    })

    createInventoryTransmission({
        gearType      : inventoryCore.gearType,
        cylinders     : inventoryCore.cylinders,
        bodyType      : inventoryCore.bodyType
    })

    selectInventorySpecs({
        exteriorColor : inventoryCore.exteriorColor,
        interiorColor : inventoryCore.interiorColor,
        numberOfDoors : inventoryCore.numberOfDoors,
        features      : inventoryCore.features,
    })
}