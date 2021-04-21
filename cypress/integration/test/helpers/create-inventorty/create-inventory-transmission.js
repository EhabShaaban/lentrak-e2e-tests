import CreateInventoryPage from "../../../page/create-inventory-page"

const createInv = new CreateInventoryPage()

/**
 * This should create inventory drivetrain section
 * for an inventory based on provided options
 * 
 * @typedef CreateInventoryPurchaseInfo
 * @property {String} gearType
 * @property {String} cylinders
 * @property {String} bodyType

 * 
 * @param {CreateInventoryPurchaseInfo} gearType        - Inventory's gear type
 * @param {CreateInventoryPurchaseInfo} cylinders       - Inventory's cylinders
 * @param {CreateInventoryPurchaseInfo} bodyType        - Inventory's body type
 */

module.exports = ({
    gearType,
    cylinders,
    bodyType,
}) => {

    createInv.selectGear(gearType)

    createInv.cylindersId().type(cylinders).type('{enter}')

    createInv.bodyTypeId().type(bodyType).type('{enter}')
    
}