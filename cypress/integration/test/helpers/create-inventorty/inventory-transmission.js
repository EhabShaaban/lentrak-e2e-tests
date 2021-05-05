import CreateInventoryPage from "../../../page/create-inventory-page"

const createInv = new CreateInventoryPage()

/**
 * This should create inventory transmission section
 * for an inventory based on provided options
 * 
 * impacted page create-inventory-page.js
 * 
 * @typedef CreateInventoryTransmissionParams
 * @property {String} gearType
 * @property {String} cylinders
 * @property {String} bodyType

 * 
 * @param {CreateInventoryTransmission} gearType        - Inventory's gear type
 * @param {CreateInventoryTransmission} cylinders       - Inventory's cylinders
 * @param {CreateInventoryTransmission} bodyType        - Inventory's body type
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