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
 * generalInfo  
 * @property {String} cityFuelEco
 * @property {String} combinedFuelEco
 * @property {String} engineDisplacement
 * @property {String} highwayFuelEco
 * @property {String} listingMileage
 * @property {String} listingPrice
 * @property {String} passengers
 * @property {String} vin
 * purchaseInfo
 * @property {String} purchaseComments
 * @property {String} purchaseInvoice
 * @property {String} purchaseMileage
 * @property {String} purchasePrice
 * @property {String} source
 * @property {String} vendor
 * 
 * @param {AssertInventory} cityFuelEco           - Inventory's city fuel economy
 * @param {AssertInventory} combinedFuelEco       - Inventory's combined economy value
 * @param {AssertInventory} engineDisplacement    - Inventory's engine displacement value
 * @param {AssertInventory} highwayFuelEco        - Inventory's highway fuel economy
 * @param {AssertInventory} listingMileage        - Inventory's listing mileage
 * @param {AssertInventory} listingPrice          - Inventory's listing price
 * @param {AssertInventory} passengers            - Inventory's passengers number
 * @param {AssertInventory} vin                   - Inventory's vin hash code
 * @param {AssertInventory} purchaseComments      - Inventory's purchase comments
 * @param {AssertInventory} purchaseInvoice       - Inventory's purchase invoice
 * @param {AssertInventory} purchaseMileage       - Inventory's purchase mileage
 * @param {AssertInventory} purchasePrice         - Inventory's purchase price
 * @param {AssertInventory} source                - Inventory's source
 * @param {AssertInventory} vendor                - Inventory's vendor
 */
module.exports =({
    inventory
}) => {

    // assert header area
    inventoryPage.inventoryStatusId().should('have.text', 'In Stock')
    inventoryPage.vinId().should('have.text', inventory.generalInfo.vin)
    inventoryPage.bodyTypeId().should('contain', inventory.inventoryCore.bodyType)
    inventoryPage.mileageId().should('contain', utils.addThousandSeparator(inventory.generalInfo.listingMileage))

    // assert price area
    inventoryPage.listingPriceId().should('contain', utils.addThousandSeparator(inventory.generalInfo.listingPrice))
    inventoryPage.purchasePrice().should('contain', utils.addThousandSeparator(inventory.purchaseInfo.purchasePrice))

    // assert spec area
    inventoryPage.gearTypeId().should('contain', inventory.inventoryCore.gearType.charAt(0).toUpperCase()+inventory.inventoryCore.gearType.slice(1))
    inventoryPage.drivetrainTypeId().should('contain', inventory.inventoryCore.inventoryType.toUpperCase())
    inventoryPage.numberOfDoorsId().should('contain', inventory.inventoryCore.numberOfDoors+' Doors')
    inventoryPage.cylindersId().should('contain', inventory.inventoryCore.cylinders+' Cylinders')
    inventoryPage.cityFuelEcoId().should('contain', inventory.generalInfo.cityFuelEco+ 'LP 100km City')
    inventoryPage.combinedFuelEcoId().should('contain', inventory.generalInfo.highwayFuelEco+'LP 100km Highway')
    inventoryPage.highwayFuelEcoId().should('contain', inventory.generalInfo.combinedFuelEco+'LP 100km Highway')
    inventoryPage.engineDisplacementId().should('contain', inventory.generalInfo.engineDisplacement)

    // assert featura area
    for(let featureDOM of inventory.inventoryCore.features){
        let featureUI = featureDOM.replace('_', ' ')
        const featureUISplitted = featureUI.split(" ");
        for (let i = 0; i < featureUISplitted.length; i++) {
            featureUISplitted[i] = featureUISplitted[i][0].toUpperCase() + featureUISplitted[i].substr(1);
        }
        // console.log(featureDOM)
        // console.log(featureUISplitted.join(" "))
        // inventoryPage.featuresDiv(featureDOM).should('contain', featureUISplitted.join(" "))
    }

    // assert purchase information, locators are chaning in dom
    // inventoryPage.sourceId().should('contain', inventory.purchaseInfo.source)

}