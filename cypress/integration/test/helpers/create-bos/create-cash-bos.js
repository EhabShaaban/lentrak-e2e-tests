import CreateBosPage from "../../../page/create-bos-page"
import InventoryPage from "../../../page/inventory-page"
import Utils from "../../../utils/utils"

const utils = new Utils()

/**
 * This should create bos for an inventory
 * 
 * impacted page  >> create-bos-page
 * impacted route >> inventory/create-bill-of-sell/stock_number/vin_code
 */
module.exports = ({
    inventory
}) => {

    const inventoryPage = new InventoryPage()
    const createBosPage = new CreateBosPage()
    let hstPrice = (inventory.generalInfo.listingPrice)*0.13

    inventoryPage.createBillOfSale()

    createBosPage.cashOptionId().click()

    createBosPage.distanceTravelledId().type("45")

    createBosPage.purchaseInformationId().click()

    createBosPage.findCustomerId().click()

    createBosPage.firstCustomerInput().click()

    createBosPage.saveCustomerSpan().click()

    createBosPage.clickTermOfSettlement()

    createBosPage.vinId().should('have.text', inventory.generalInfo.vin)

    createBosPage.hstOnSubTotalInput().should('contain.text', utils.addThousandSeparator((hstPrice).toFixed(2)))

    createBosPage.subTotalId().should('contain.text', "$"+utils.addThousandSeparator((inventory.generalInfo.listingPrice).toFixed(2)))

    createBosPage.subTotalWithHst().should('contain.text', "$"+utils.addThousandSeparator(((inventory.generalInfo.listingPrice)+hstPrice).toFixed(2)))

    createBosPage.saveBos().should('have.text', 'Save').click();

    cy.wait(11000)
    
}