/// <reference types="Cypress" />

import Utils from '../utils/Utils'
import DashboardPage from '../page/DashboardPage'

const utils = new Utils()
const dashboardPage = new DashboardPage()

let loginCredentials
let vin = "5TBRT34145S466823"

describe('', function() {

    before(() => {
        cy.fixture('login_credentials').then(cred => loginCredentials = cred)
        })

    beforeEach(function(){
        cy.visit('/')
        utils.login(loginCredentials.dev.username, loginCredentials.dev.passwd)
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./inventory/create')
    })

    it('', function(){
        cy.log("Hey Inventory!")
    })
})