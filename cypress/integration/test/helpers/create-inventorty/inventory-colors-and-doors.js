import CreateInventoryPage from '../../../page/create-inventory-page'

const createInventory = new CreateInventoryPage()

/**
 * This should select exterior colors and interior
 * colors and number of doors for an inventory
 * based on provided options
 * 
 * impacted page create-inventory-page.js
 * 
 * @typedef InventoryColorsAndDoorsParams
 * @property {String} exteriorColor
 * @property {String} interiorColor
 * @property {String} numberOfDoors
 * 
 * @param {InventoryColorsAndDoors} exteriorColor  - Inventory's exterior color
 * @param {InventoryColorsAndDoors} interiorColor  - Inventory's interior color
 * @param {InventoryColorsAndDoors} numberOfDoors  - Inventory's number of doors
 */


 module.exports = ({
    exteriorColor,
    interiorColor,
    numberOfDoors,
}) => {
    
    createInventory.exteriorColorDiv(exteriorColor).click()
    
    createInventory.interiorColorColorDiv(interiorColor).click()

    createInventory.selectDoorNumber(numberOfDoors)

}