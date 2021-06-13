import InventoryPage from '../../../page/inventory-page'
import Utils from '../../../utils/utils'

const inventoryPage = new InventoryPage()
const utils = new Utils()

/**
 * This should assert newly created inventory
 * 
 * impacted page >> inventory/stock_number
 * 
 * accepting inventory object as an argument with the following values
 * 
 * @typedef AssertInventoryParams  
 * @property {String} cityFuelEco
 * @property {String} combinedFuelEco
 * @property {String} highwayFuelEco
 * @property {String} listingMileage
 * @property {String} listingPrice
 * @property {String} vin
 * @property {String} purchaseMileage
 * @property {String} purchasePrice
 * 
 * @param {AssertInventory} cityFuelEco           - Inventory's city fuel economy
 * @param {AssertInventory} combinedFuelEco       - Inventory's combined economy value
 * @param {AssertInventory} highwayFuelEco        - Inventory's highway fuel economy
 * @param {AssertInventory} listingMileage        - Inventory's listing mileage
 * @param {AssertInventory} listingPrice          - Inventory's listing price
 * @param {AssertInventory} vin                   - Inventory's vin hash code
 * @param {AssertInventory} purchaseMileage       - Inventory's purchase mileage
 * @param {AssertInventory} purchasePrice         - Inventory's purchase price
 */
module.exports =({
    inventory
}) => {

    // inventoryPage.inventoryStatusId().should('have.text', 'In Stock')
    inventoryPage.vinId().should('have.text', inventory.generalInfo.vin)
    inventoryPage.mileageId().should('contain', utils.addThousandSeparator(inventory.generalInfo.listingMileage))
    inventoryPage.listingPriceId().should('contain', utils.addThousandSeparator(inventory.generalInfo.listingPrice))
    inventoryPage.purchasePrice().should('contain', utils.addThousandSeparator(inventory.purchaseInfo.purchasePrice))
    inventoryPage.profitId().should('contain', utils.addThousandSeparator((inventory.generalInfo.listingPrice - inventory.purchaseInfo.purchasePrice)))
    inventoryPage.gearTypeId().should('contain', inventory.inventoryCore.gearType.charAt(0).toUpperCase()+inventory.inventoryCore.gearType.slice(1))
    inventoryPage.numberOfDoorsId().should('contain', inventory.inventoryCore.numberOfDoors+' Doors')
    inventoryPage.cylindersId().should('contain', inventory.inventoryCore.cylinders+' Cylinders')
    inventoryPage.cityFuelEcoId().should('contain', inventory.generalInfo.cityFuelEco+ 'LP 100km City')
    inventoryPage.combinedFuelEcoId().should('contain', inventory.generalInfo.highwayFuelEco+'LP 100km Highway')
    inventoryPage.highwayFuelEcoId().should('contain', inventory.generalInfo.combinedFuelEco+'LP 100km Highway')
    inventoryPage.engineDisplacementId().should('contain', "3.3")

}