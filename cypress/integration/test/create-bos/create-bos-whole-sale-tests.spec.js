/// <reference types="Cypress" />

import {adaptToReduxPersist} from '../../utils/redux'
import createCashBos from '../../test/helpers/create-bos/create-cash-bos'
import {getInventory} from '/home/ehab/dev/lentrak/ui-framework/cypress/support/commands.js'
import assertInventory from '../helpers/create-inventorty/assert-inventory'

let loginCredentials
let stockNumber
let inventory = getInventory()

describe('create cash bos suite', function() {

    before(function() {

        cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWD")).then(function(creds) {loginCredentials = creds})

    })

    beforeEach(function(){

        cy.createWholeSaleInventory().then((stockNumber)=>{
            console.log("Stock: ", stockNumber)
            console.log(inventory)
            cy.visit('./inventory/'+stockNumber, {
                onBeforeLoad (win) {
                    win.localStorage.setItem('persist:root', adaptToReduxPersist(loginCredentials))
                }
            })
            createCashBos({inventory:inventory})
            cy.visit('./inventory/'+stockNumber)
        })
    })

    it('create bos', function(){

        console.log("it!")
        
    })

    afterEach(function(){

        console.log("after it!")

    })
})