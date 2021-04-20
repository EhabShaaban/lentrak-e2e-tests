import CreateInventoryPage from '../../page/create-inventory-page'

const createInv = new CreateInventoryPage()

/**
 * This should create purchase information section 
 * for an inventory based on provided options
 * 
 * @typedef CreateInventoryPurchaseInformationParams
 * @property {String} source
 * @property {String} vendor
 * @property {String} purchasePrice
 * @property {String} purchaseMileage
 * @property {String} purchaseInvoice
 * @property {String} purchaseComments
 * 
 * @param {CreateInventoryPurchaseInformationParams} source           - Inventory's source whole-sale or trade-in
 * @param {CreateInventoryPurchaseInformationParams} vendor           - Inventory's vendor name
 * @param {CreateInventoryPurchaseInformationParams} purchasePrice    - Inventory's purchase price
 * @param {CreateInventoryPurchaseInformationParams} purchaseMileage  - Inventory's purchase mileage
 * @param {CreateInventoryPurchaseInformationParams} purchaseInvoice  - Inventory's purchase invoice number
 * @param {CreateInventoryPurchaseInformationParams} purchaseComments - Inventory's purchase comments
 */

module.exports = ({
    source,
    vendor,
    purchasePrice,
    purchaseMileage,
    purchaseInvoice,
    purchaseComments,
}) => {
    createInv.nextBtn().click()

    createInv.sourceSpan().click({force: true})

    createInv.sourceSpan().type(source).type('{enter}')

    createInv.vendorId().type(vendor).type('{enter}')

    createInv.purchasePriceInput().click({force: true})

    createInv.purchasePriceInput().type(purchasePrice)

    createInv.purchaseMileageId().type(purchaseMileage)

    createInv.purchaseInvoiceId().type(purchaseInvoice)

    createInv.purchaseCommentsId().type(purchaseComments)

    let purchaseTax = purchasePrice * 0.13;

    purchaseTax = purchaseTax.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    
    createInv.purchaseTaxInput().should('have.value', purchaseTax)
}