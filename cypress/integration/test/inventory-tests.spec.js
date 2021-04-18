/// <reference types="Cypress" />

import Utils from '../utils/utils'
import DashboardPage from '../page/dashboard-page'
import CreateInventoryPage from '../page/create-inventory-page'

const utils = new Utils()
const dashboardPage = new DashboardPage()
const createInv = new CreateInventoryPage()

let loginCredentials
let inventoryData

describe('Create new inventory test suite', function() {

    before(() => {
        cy.fixture('login_credentials').then(cred => loginCredentials = cred)
        cy.fixture('new_inventory_data').then(inv => inventoryData = inv)
        })

    beforeEach(function(){
        cy.visit('/')
        utils.login(loginCredentials.dev.username, loginCredentials.dev.passwd)
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./inventory/create')
        // cy.exec("node ./cypress/integration/utils/vin-puppeteer.js")
    })

    it('Create 4WD, gasoline, ...', function(){
        createInv.vinId().type(inventoryData.generalInfo.vin).type('{enter}')
        // createInv.stockNumberId().type(inventoryData.generalInfo.stockNumber)
        createInv.listingMileageId().type(inventoryData.generalInfo.listingMileage)
        createInv.listingPriceInput().type(inventoryData.generalInfo.ListingPrice)
        createInv.exteriorColorDiv().click()
        createInv.interiorColorColorDiv().click()
        for(var i=0; i<=5;i++){
            createInv.featuresDiv(i).click()
        }
        createInv.fourWdDiv().click()
        createInv.fuelTypeId().type(inventoryData.generalInfo.drivetrain.fuelType.gasoline).type('{enter}')
        createInv.cityFuelEcoId().type(inventoryData.generalInfo.drivetrain.cityFuelEconomy)
        createInv.engineDisplacementId().type(inventoryData.generalInfo.drivetrain.engineDisplacement)
        //
        createInv.automaticDiv().click()
        createInv.cylindersId().type(inventoryData.generalInfo.transmission.cylinders[4]).type('{enter}')
    })
})