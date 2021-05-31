/// <reference types="Cypress" />

import {adaptToReduxPersist} from '../../utils/redux'
import {getStockNumber} from '/home/ehab/dev/lentrak/ui-framework/cypress/support/commands.js'

let loginCredentials

describe('create bos suite', function() {

    before(function() {

        cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWD")).then(function(creds) {loginCredentials = creds})

    })

    beforeEach(function(){

        cy.visit('./inventory', {
            onBeforeLoad (win) {
                win.localStorage.setItem('persist:root', adaptToReduxPersist(loginCredentials))
            }
        })

        cy.createInventory()
        cy.getSessionStorage('stock').should('exist')

    })

    it('create bos', function(){

        console.log("is it working!")
        
    })

    afterEach(function(){

        console.log("echo after")

    })
})