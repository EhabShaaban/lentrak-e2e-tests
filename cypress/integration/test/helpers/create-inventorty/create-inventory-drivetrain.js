import CreateInventoryPage from "../../../page/create-inventory-page"

const createInv = new CreateInventoryPage()

/**
 * This should create inventory drivetrain section
 * for an inventory based on provided options
 * 
 * @typedef CreateInventoryDrivetrainParam
 * @property {String} inventoryType
 * @property {String} fuelType
 * 
 * @param {CreateInventoryDrivetrainParam} inventoryType  - Inventory's type
 * @param {CreateInventoryDrivetrainParam} fuelType       - Inventory's fuel type
 */

module.exports = ({
    inventoryType,
    fuelType,
}) => {

    createInv.selectInventoryType(inventoryType)

    createInv.fuelTypeId().type(fuelType).type('{enter}')
    
}