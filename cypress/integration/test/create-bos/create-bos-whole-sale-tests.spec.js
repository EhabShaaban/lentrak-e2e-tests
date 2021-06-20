/// <reference types="Cypress" />

import {adaptToReduxPersist} from '../../utils/redux'
import createCashBos from '../../test/helpers/create-bos/create-cash-bos'
import createFinanceBos from '../../test/helpers/create-bos/create-finance-bos'
import {getInventory} from '../../../support/commands.js'
import assertInventory from '../helpers/create-inventorty/assert-inventory'

let loginCredentials
let inventory = getInventory()

describe('source:whole-sale/create cash bos suite', function() {

    before(function() {

        cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWD")).then(function(creds) {loginCredentials = creds})

    })

    for(let i = 0; i < 2; i++){
        it('create cash bos test #'+(i+1), function(){

            cy.createWholeSaleInventory().then((stockNumber)=>{
                console.log("Stock: ", stockNumber)
                cy.visit('./inventory/'+stockNumber, {
                    onBeforeLoad (win) {
                        win.localStorage.setItem('persist:root', adaptToReduxPersist(loginCredentials))
                    }
                })
                createCashBos({inventory:inventory})
                cy.visit('./inventory/'+stockNumber)
            })
            
        })
    }

    afterEach(function(){

        assertInventory({inventory:inventory})

    })
})

describe('source:whole-sale/create finance bos suite', function() {

    before(function() {

        cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWD")).then(function(creds) {loginCredentials = creds})

    })

    for(let i = 0; i < 2; i++){
        it('create finance bos test #'+(i+1), function(){

            cy.createWholeSaleInventory().then((stockNumber)=>{
                console.log("Stock: ", stockNumber)
                cy.visit('./inventory/'+stockNumber, {
                    onBeforeLoad (win) {
                        win.localStorage.setItem('persist:root', adaptToReduxPersist(loginCredentials))
                    }
                })
                createFinanceBos({inventory:inventory})
                cy.visit('./inventory/'+stockNumber)
            })
            
        })
    }

    afterEach(function(){

        assertInventory({inventory:inventory})

    })
})