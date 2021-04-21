import CreateInventoryPage from '../../../page/create-inventory-page'

const createInv = new CreateInventoryPage()


/**
 * This should create inventory drivetrain section
 * for an inventory based on provided options
 * 
 * @typedef CreateInventoryPurchaseInfo
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

    purchaseTax = purchaseTax.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    
    createInv.purchaseTaxInput().should('have.value', purchaseTax)

    createInv.saveBtn().click()

    createInv.congratulationsMsgDiv().should('have.text', 'Congratulations!')

    createInv.successMsgDiv().then(($text) => {
        const stockNumber = $text.text().slice(-9);
        cy.log(stockNumber)
        cy.visit('./inventory/'+stockNumber)
    });
    
}