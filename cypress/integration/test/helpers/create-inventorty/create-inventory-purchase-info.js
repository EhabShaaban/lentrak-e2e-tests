import CreateInventoryPage from '../../../page/create-inventory-page'

const createInv = new CreateInventoryPage()

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