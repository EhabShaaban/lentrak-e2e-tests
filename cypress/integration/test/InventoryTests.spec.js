/// <reference types="Cypress" />

import Utils from '../utils/Utils'
import DashboardPage from '../page/DashboardPage'
import CreateInventoryPage from '../page/CreateInventoryPage'

const utils = new Utils()
const dashboardPage = new DashboardPage()
const createInv = new CreateInventoryPage()

let loginCredentials
let inventoryData

describe('', function() {

    before(() => {
        cy.fixture('login_credentials').then(cred => loginCredentials = cred)
        cy.fixture('new_inventory_data').then(inv => inventoryData = inv)
        })

    beforeEach(function(){
        cy.visit('/')
        utils.login(loginCredentials.dev.username, loginCredentials.dev.passwd)
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./inventory/create')
    })

    it('', function(){
        createInv.vinId().type(inventoryData.generalInfo.vin).type('{enter}')
        createInv.stockNumberId().type(inventoryData.generalInfo.stockNumber)
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
    })
})