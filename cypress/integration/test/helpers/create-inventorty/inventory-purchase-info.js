import CreateInventoryPage from '../../../page/create-inventory-page'
import Utils from '../../../utils/utils'

const createInv = new CreateInventoryPage()
const utils = new Utils()
const fs = require('fs')

let stocks=[];


/**
 * This should create inventory purchase info
 * section for an inventory based on provided options
 * 
 * impacted page create-inventory-page.js
 * 
 * accepting purchaseInfo object as an argument with the following values
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
    purchaseInfo
}) => {

    createInv.nextBtn().click()

    createInv.sourceSpan().click({force: true})

    createInv.sourceSpan().type(purchaseInfo.source).type('{enter}')

    createInv.vendorId().type(purchaseInfo.vendor).type('{enter}')

    createInv.purchasePriceInput().click({force: true})

    createInv.purchasePriceInput().type(purchaseInfo.purchasePrice)

    createInv.purchaseMileageId().type(purchaseInfo.purchaseMileage)

    createInv.purchaseInvoiceId().type(purchaseInfo.purchaseInvoice)

    createInv.purchaseCommentsId().type(purchaseInfo.purchaseComments)

    let purchaseTax = purchaseInfo.purchasePrice * 0.13;

    purchaseTax = utils.addThousandSeparator(purchaseTax)

    cy.log (purchaseTax)
    
    createInv.purchaseTaxInput().should('have.value', purchaseTax)

    createInv.saveBtn().click()

    createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')

    createInv.generatedStockNumberDiv().then(($text) => {
        const stockNumber = $text.text();
        cy.log("Stock Number: "+stockNumber)
        cy.visit('./inventory/'+stockNumber)

        stocks.push(stockNumber);

        cy.writeFile('./cypress/fixtures/stocks.json', stocks)
    });
    
}