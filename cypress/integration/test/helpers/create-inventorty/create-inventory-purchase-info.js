import CreateInventoryPage from '../../../page/create-inventory-page'
import Utils from '../../../utils/utils'

const createInv = new CreateInventoryPage()
const utils = new Utils()


/**
 * This should create inventory purchase info
 * section for an inventory based on provided options
 * 
 * impacted page create-inventory-page.js
 * 
 * @typedef CreateInventoryPurchaseInfoParams
 * @property {String} source
 * @property {String} vendor
 * @property {String} purchasePrice
 * @property {String} purchaseMileage
 * @property {String} purchaseInvoice
 * @property {String} purchaseComments

 * 
 * @param {CreateInventoryPurchaseInfo} source               - Inventory's source
 * @param {CreateInventoryPurchaseInfo} vendor               - Inventory's vendor
 * @param {CreateInventoryPurchaseInfo} purchasePrice        - Inventory's purchase price
 * @param {CreateInventoryPurchaseInfo} purchaseMileage      - Inventory's purchase mileage
 * @param {CreateInventoryPurchaseInfo} purchaseInvoice      - Inventory's purchase invoice
 * @param {CreateInventoryPurchaseInfo} purchaseComments     - Inventory's purchase comments
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

    purchaseTax = utils.addThousandSeparator(purchaseTax)

    cy.log (purchaseTax)
    
    createInv.purchaseTaxInput().should('have.value', purchaseTax)

    createInv.saveBtn().click()

    createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')

    createInv.generatedStockNumberDiv().then(($text) => {
        const stockNumber = $text.text();
        cy.log("Stock Number: "+stockNumber)
        cy.visit('./inventory/'+stockNumber)
    });
    
}