/// <reference types="Cypress" />

import DashboardPage from '../page/DashboardPage'
import UserPage from '../page/UserPage'
import Utils from '../utils/Utils'

const utils = new Utils()
const userPage = new UserPage()
const dashboardPage = new DashboardPage()

describe('User test suite', function() {
    beforeEach(function(){
        cy.fixture('login_credentials').as('loginCredentials')
    })
    it('Create new user', function(){
        cy.visit('/')
        utils.login(this.loginCredentials.dev.username, this.loginCredentials.dev.passwd)
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./users')
    })
})