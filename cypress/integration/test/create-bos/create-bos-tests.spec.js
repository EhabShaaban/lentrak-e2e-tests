/// <reference types="Cypress" />

import {adaptToReduxPersist} from '../../utils/redux'

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

        cy.createInventory().then((value)=>console.log(value))
    })

    it('create bos', function(){

        console.log("is it working!")
        
    })

    afterEach(function(){

        console.log("echo after")

    })
})