import CreateInventoryPage from '../../../page/create-inventory-page'

const createInventory = new CreateInventoryPage()

/**
 * This should assert newly created inventory
 * 
 * impacted page >> inventory/stock_number
 * 
 * accepting inventory object as an argument with the following values
 * 
 * @typedef AssertInventoryParams

 * @property {String} listingMileage
 * @property {String} cityFuelEco
 * @property {String} highwayFuelEco
 * @property {String} passengers
 * @property {String} combinedFuelEco
 * @property {String} engineDisplacement
 * @property {String} listingPrice
 * @property {String} inventoryType
 * @property {String} fuelType
 * @property {String} gearType
 * @property {String} cylinders
 * @property {String} bodyType
 * @property {String} exteriorColor
 * @property {String} interiorColor
 * @property {String} numberOfDoors
 * @property {List}   features
 * @property {String} source
 * @property {String} vendor
 * @property {String} purchasePrice
 * @property {String} purchaseMileage
 * @property {String} purchaseInvoice
 * @property {String} purchaseComments
 * 
 * @param {AssertInventory} listingMileage      - Inventory's listing mileage
 * @param {AssertInventory} cityFuelEco         - Inventory's city fuel economy
 * @param {AssertInventory} highwayFuelEco      - Inventory's highway fuel economy
 * @param {AssertInventory} passengers          - Inventory's passengers number
 * @param {AssertInventory} combinedFuelEco     - Inventory's combined economy value
 * @param {AssertInventory} engineDisplacement  - Inventory's engine displacement value
 * @param {AssertInventory} listingPrice        - Inventory's listing price
 * @param {AssertInventory} inventoryType       - Inventory's type
 * @param {AssertInventory} fuelType            - Inventory's fuel type
 * @param {AssertInventory} gearType            - Inventory's gear type
 * @param {AssertInventory} cylinders           - Inventory's cylinders
 * @param {AssertInventory} bodyType            - Inventory's body type
 * @param {AssertInventory} exteriorColor       - Inventory's exterior color
 * @param {AssertInventory} interiorColor       - Inventory's interior color
 * @param {AssertInventory} numberOfDoors       - Inventory's number of doors
 * @param {AssertInventory} features            - Inventory's list of features
 * @param {AssertInventory} source              - Inventory's source
 * @param {AssertInventory} vendor              - Inventory's vendor
 * @param {AssertInventory} purchasePrice       - Inventory's purchase price
 * @param {AssertInventory} purchaseMileage     - Inventory's purchase mileage
 * @param {AssertInventory} purchaseInvoice     - Inventory's purchase invoice
 * @param {AssertInventory} purchaseComments    - Inventory's purchase comments
 */
module.exports =({
    inventory
}) => {

    console.log(inventory)

}