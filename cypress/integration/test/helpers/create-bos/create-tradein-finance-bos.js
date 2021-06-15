import CreateBosPage from "../../../page/create-bos-page"
import InventoryPage from "../../../page/inventory-page"
import Utils from "../../../utils/utils"
import faker from 'faker'
import vinGenerator from 'vin-generator'
import moment from 'moment'

const utils = new Utils()
const today = moment()

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
  let vin = vinGenerator.generateVin()
  let hstPrice = (inventory.generalInfo.listingPrice)*0.13
  let tradinAllowance = faker.datatype.number({
    'min': 1000,
    'max': 3000
  })
  let netDifference = (inventory.generalInfo.listingPrice)-tradinAllowance;
  let amountOfPayment = faker.datatype.number({
      'min': 1,
      'max': inventory.generalInfo.listingPrice
    })
  let paymentNumber = faker.finance.account()
  let date = today.format('YYYY-MM-DD')
  let netAmount = inventory.generalInfo.listingPrice
  let interestRate = faker.datatype.number({
      'min': 1,
      'max': 10
    })
  let financeAmountArray = [];
  function  getFinanceAmount() {
      let amount = faker.datatype.number({
          'min': 50,
          'max': 200
        })
        financeAmountArray.push(amount)
        return amount;
  }

  inventoryPage.createBillOfSale()

  createBosPage.financeOptionId().click()

  createBosPage.distanceTravelledId().type("45")

  createBosPage.purchaseInformationId().click()

  createBosPage.findCustomerId().click()

  createBosPage.firstCustomerInput().click()

  createBosPage.saveCustomerSpan().click()

  createBosPage.termOfFinancing().click()

  createBosPage.typeAmountOfPayment(amountOfPayment)

  createBosPage.typeNumberOfPayment(paymentNumber)
  
  createBosPage.typePaymentStartOn(date)

  createBosPage.typeNetAmount(netAmount)

  createBosPage.typeBalanceFinanced(getFinanceAmount())

  createBosPage.typeInterestRate(interestRate)

  createBosPage.typeBorrowingCost(getFinanceAmount())

  createBosPage.typeLien(getFinanceAmount())

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

  createBosPage.subTotalTwoId().should('contain.text', "$"+utils.addThousandSeparator(((netDifference)+(netDifference*0.13)).toFixed(2)))

  createBosPage.lienInput().should('have.value', financeAmountArray[2])

  createBosPage.balanceFinacnceInput().should('have.value', financeAmountArray[0])

  createBosPage.netAmountInput().should('have.value', utils.addThousandSeparator(netAmount))

  // createBosPage.interestInput().should('have.value', interestRate)

  createBosPage.borrowingCostInput().should('have.value', financeAmountArray[1])


  createBosPage.saveBos().should('have.text', 'Save').click();

  cy.wait(11000)
    
}