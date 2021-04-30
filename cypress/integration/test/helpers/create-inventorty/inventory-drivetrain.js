import CreateInventoryPage from "../../../page/create-inventory-page"

const createInv = new CreateInventoryPage()

/**
 * This should create inventory drivetrain section
 * for an inventory based on provided options
 * 
 * impacted page create-inventory-page.js
 * 
 * @typedef CreateInventoryDrivetrainParams
 * @property {String} inventoryType
 * @property {String} fuelType
 * 
 * @param {CreateInventoryDrivetrain} inventoryType  - Inventory's type
 * @param {CreateInventoryDrivetrain} fuelType       - Inventory's fuel type
 */

module.exports = ({
    inventoryType,
    fuelType,
}) => {

    createInv.selectInventoryType(inventoryType)

    createInv.fuelTypeId().type(fuelType).type('{enter}')
    
}