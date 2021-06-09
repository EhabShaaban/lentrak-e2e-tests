/// <reference types="Cypress" />

// impacted route >> inventory/create-bill-of-sell/stock_number/vin_code

class CreateBosPage
{
    cashOptionId(){
        return cy.get("#inventory-bill-img-8517")
    }
    distanceTravelledId(){
        return cy.get("#inventory-vehicle-input-1617")
    }
    purchaseInformationId(){
        return cy.get("div[id='inventory-5573-bold-text warned-step']")
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
    hstOnSubTotalInput(){
        return cy.get("div[data-testid='hstonsubotal'] #app-price")
    }
    subTotalId(){
        return cy.get("div[data-testid='subTotal_1'] #app-price")
    }
    subTotalWithHst(){
        return cy.get("div[data-testid='subTotal_2'] #app-price")
    }
    vinId(){
        return cy.get("#inventory-gen-info-vin-8570")
    }
    // action that this page can do
    clickTermOfSettlement(){
        return cy.get('#inventory-bill-btn-0991').click()
    }
    saveBos(){
        return cy.get('button span').eq(1)
    }
}

export default CreateBosPage