/// <reference types="Cypress" />

// impacted route >> inventory/create-bill-of-sell/stock_number/vin_code

class CreateBosPage
{
    cashOptionId(){
        return cy.get("#inventory-bill-img-8517")
    }
    financeOptionId(){
        return cy.get("#inventory-bill-img-6352")
    }
    distanceTravelledId(){
        return cy.get("#inventory-vehicle-input-1617")
    }
    purchaseInformationId(){
        return cy.get("div[id='inventory-5573-bold-text warned-step'] div").contains('Purchaser\'\s Information')
    }
    findCustomerId(){
        return cy.get("#inventory-bill-btn-0904")
    }
    firstCustomerInput(){
        return cy.get("tbody tr input")
    }
    saveCustomerSpan(){
        return cy.get("button[class='ant-btn sc-jSgupP fOyugb save-button'] span").eq(1)
    }
    termOfFinancing(){
        return cy.get("div[id='inventory-5573-bold-text warned-step']").contains('Terms of Financing')
    }
    hstOnSubTotalInput(){
        return cy.get("div[data-testid='hstonsubotal'] #app-price")
    }
    subTotalId(){
        return cy.get("div[data-testid='subTotal_1'] #app-price")
    }
    subTotalTwoId(){
        return cy.get("div[data-testid='subTotal_2'] #app-price")
    }
    subTotalWithHst(){
        return cy.get("div[data-testid='subTotal_2'] #app-price")
    }
    lienInput(){
        return cy.get('input[id="Lien Registration Fee"]')
    }
    balanceFinacnceInput(){
        return cy.get('input[id="Balance Financed"]')
    }
    netAmountInput(){
        return cy.get('input[id="Net Amount to be Financed"]')
    }
    // interestInput(){
    //     return cy.get('')
    // }
    borrowingCostInput(){
        return cy.get('input[id="Cost of Borrowing"]')
    }
    vinId(){
        return cy.get("#inventory-gen-info-vin-8570")
    }
    // action that this page can do
    clickTermOfSettlement(){
        return cy.get('#inventory-bill-btn-0991').click()
    }
    typeAmountOfPayment(amount){
        return cy.get("input[data-testid='Amount of Payments*']").type(amount)
    }
    typeNumberOfPayment(paymentNumber){
        return cy.get('#inventory-terms-input-5571').type(paymentNumber)
    }
    typePaymentStartOn(date){
        return cy.get('#inventory-terms-date-0325').type(date, {force: true}).type('{enter}')
    }
    typeNetAmount(netAmount){
        return cy.get('#inventory-terms-input-2207').type(netAmount)
    }
    typeBalanceFinanced(balanceFinanced){
        return cy.get('#inventory-terms-input-6698').type(balanceFinanced)
    }
    typeInterestRate(interestRate){
        return cy.get('#inventory-terms-input-7314').type(interestRate)
    }
    typeBorrowingCost(borrowingCost){
        return cy.get('#inventory-terms-input-6602').type(borrowingCost)
    }
    typeLien(lien){
        return cy.get('#inventory-terms-input-0465').type(lien)
    }
    saveBos(){
        return cy.get('button span').eq(1)
    }
    tradeInOptionId(){
        return cy.get("div[id='inventory-5573-regular-text step'] div").contains('Trade-In Vehicle')
    }
    tradeInVinId(){
        return cy.get('#inventory-trade-input-5064')
    }
    tradeInDecodeSpan(){
        return cy.get('button span').contains('Decode')
    }
    odometerId(){
        return cy.get('#inventory-trade-input-9638')
    }
    tradeinAllowanceId(){
        return cy.get('#inventory-trade-currency-7996')
    }
    taxOnTradeInAllowance(){
        return cy.get('#inventory-trade-currency-6887')
    }
    netDifferenceSpan(){
        return cy.get('div[data-testid="netdifference"] span')
    }
    hstOnNetDifferenceSpan(){
        return cy.get('div[data-testid="hstonnetdifference"] span')
    }
}

export default CreateBosPage