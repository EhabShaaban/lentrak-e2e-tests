import CreateInventoryPage from '../../../page/create-inventory-page'

const createInv = new CreateInventoryPage()

/**
 * This should select exterior colors and interior
 * colors for an inventory based on provided options
 * 
 * impacted page create-inventory-page.js
 * 
 * @typedef CreateInventoryColorsParams
 * @property {String} exteriorColor
 * @property {String} interiorColor
 * 
 * @param {CreateInventoryColorsParams} exteriorColor  - Inventory's exterior color
 * @param {CreateInventoryColorsParams} interiorColor  - Inventory's interior color
 */


 module.exports = ({
    exteriorColor,
    interiorColor
}) => {
    
    createInv.exteriorColorDiv(exteriorColor).click()
    
    createInv.interiorColorColorDiv(interiorColor).click()

}