import CreateBosPage from "../../../page/create-bos-page"
import InventoryPage from "../../../page/inventory-page"
import Utils from "../../../utils/utils"
import faker from 'faker'
import vinGenerator from 'vin-generator'

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
  let tradinAllowance = faker.datatype.number({
    'min': 1000,
    'max': 3000
  })
  let netDifference = (inventory.generalInfo.listingPrice)-tradinAllowance;
  let vin = vinGenerator.generateVin()
  let hstPrice = (inventory.generalInfo.listingPrice)*0.13

  inventoryPage.createBillOfSale()

  createBosPage.cashOptionId().click()

  createBosPage.distanceTravelledId().type("45")

  createBosPage.purchaseInformationId().click()

  createBosPage.findCustomerId().click()

  createBosPage.firstCustomerInput().click()

  createBosPage.saveCustomerSpan().click()

  createBosPage.tradeInOptionId().click()

  createBosPage.tradeInVinId().type(vin)

  createBosPage.tradeInDecodeSpan().click()

  createBosPage.tradeinAllowanceId().type(tradinAllowance)

  createBosPage.odometerId().type("45")

  createBosPage.tradeinAllowanceId().clear()

  createBosPage.tradeinAllowanceId().type(tradinAllowance)

  createBosPage.odometerId().clear()
  
  createBosPage.odometerId().type("45")

  createBosPage.clickTermOfSettlement()

  createBosPage.vinId().should('have.text', inventory.generalInfo.vin)

  createBosPage.hstOnSubTotalInput().should('contain.text', utils.addThousandSeparator((hstPrice).toFixed(2)))

  createBosPage.subTotalId().should('contain.text', "$"+utils.addThousandSeparator((inventory.generalInfo.listingPrice).toFixed(2)))

  createBosPage.netDifferenceSpan().should('contain.text', "$"+utils.addThousandSeparator((netDifference).toFixed(2)))

  createBosPage.hstOnNetDifferenceSpan().should('contain.text', "$"+utils.addThousandSeparator((netDifference*0.13).toFixed(2)))

  createBosPage.saveBos().should('have.text', 'Save').click();

  cy.wait(11000)
    
}