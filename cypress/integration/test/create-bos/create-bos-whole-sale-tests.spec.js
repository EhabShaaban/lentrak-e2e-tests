/// <reference types="Cypress" />

import {adaptToReduxPersist} from '../../utils/redux'

let loginCredentials
let stockNumber

describe('create bos suite', function() {

    before(function() {

        cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWD")).then(function(creds) {loginCredentials = creds})

    })

    beforeEach(function(){

        cy.createWholeSaleInventory()

        cy.window().its('sessionStorage').then((data) =>{
            stockNumber = parseInt(data.stock)+1
            console.log(stockNumber)
            cy.visit('./inventory/'+stockNumber, {
                onBeforeLoad (win) {
                    win.localStorage.setItem('persist:root', adaptToReduxPersist(loginCredentials))
                }
            })
        })
    })

    it('create bos', function(){

        console.log("it!")
        
    })

    afterEach(function(){

        console.log("after it!")

    })
})