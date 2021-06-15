/// <reference types="Cypress" />

import {adaptToReduxPersist} from '../../utils/redux'
import createTradeInCashBos from '../helpers/create-bos/create-tradein-cash-bos'
import createTradeInFinanceBos from '../helpers/create-bos/create-tradein-finance-bos'
import {getInventory} from '/home/ehab/dev/lentrak/ui-framework/cypress/support/commands.js'
import assertInventory from '../helpers/create-inventorty/assert-inventory'

let loginCredentials
let inventory = getInventory()

describe('source:trade-in/create cash bos suite', function() {

    before(function() {

        cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWD")).then(function(creds) {loginCredentials = creds})

    })

    for(let i = 0; i < 2; i++){
        it('create cash bos test #'+(i+1), function(){

            cy.createTradeInInventory().then((stockNumber)=>{
                console.log("Stock: ", stockNumber)
                cy.visit('./inventory/'+stockNumber, {
                    onBeforeLoad (win) {
                        win.localStorage.setItem('persist:root', adaptToReduxPersist(loginCredentials))
                    }
                })
                createTradeInCashBos({inventory:inventory})
                cy.visit('./inventory/'+stockNumber)
            })
            
        })
    }

    afterEach(function(){

        assertInventory({inventory:inventory})

    })
})

describe('source:trade-in/create finance bos suite', function() {

    before(function() {

        cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWD")).then(function(creds) {loginCredentials = creds})

    })

    for(let i = 0; i < 2; i++){
        it('create finance bos test #'+(i+1), function(){

            cy.createTradeInInventory().then((stockNumber)=>{
                console.log("Stock: ", stockNumber)
                cy.visit('./inventory/'+stockNumber, {
                    onBeforeLoad (win) {
                        win.localStorage.setItem('persist:root', adaptToReduxPersist(loginCredentials))
                    }
                })
                createTradeInFinanceBos({inventory:inventory})
                cy.visit('./inventory/'+stockNumber)
            })
            
        })
    }

    afterEach(function(){

        assertInventory({inventory:inventory})

    })
})