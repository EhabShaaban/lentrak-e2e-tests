/// <reference types="Cypress" />

import names from '/home/ehab/lentrak/ui-framework/cypress/fixtures/random_names.json'
import {writeFileSync} from 'fs';

class Utils {
    
    //logout locators
    userIconDiv() {
        return cy.get("div[class='sc-gsTCUz dMzJOQ flex-x center cursor-pointer an-13 bold-text']")
    }
    logoutImg() {
        return cy.get("img[alt='Logout']")
    }
    //vin locators
    randomRealVinInput() {
        return cy.get("input[value='Random Real VIN']")
    }
    vinH2() {
        return cy.get("span[id='Result'] h2")
    }
    //login locators
    usernameID() {
        return cy.get("#username")
    }
    passwordID() {
        return cy.get("#password")
    }
    loginButton() {
        return cy.get("button[type='submit']")
    }
    //action methods
    login(username, passwd) {
        this.usernameID().type(username)
        this.passwordID().type(passwd)
        this.loginButton().click()
    }
    logout() {
        this.userIconDiv().trigger('mouseover')
        this.logoutImg().click()
    }
    getVIN() {
        cy.visit(Cypress.env('vin'))
        this.randomRealVinInput().click().wait(1000)
        // this.vinH2().then(($vin) => {
        //     cy.log($vin.text())
        // })

        // console.log(this.vinH2().text())

        // const fs = require('fs');
        writeFileSync('/home/ehab/lentrak/ui-framework/cypress/fixtures/vin.json', this.vinH2().text());
    }
    makeEmail() {
        var strValues = "abcdefg12345";
        var strEmail = "";
        var strTmp;
        for (var i = 0; i < 10; i++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strTmp = "";
        strEmail = strEmail + "@";
        for (var j = 0; j < 8; j++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strEmail = strEmail + ".com"
        return strEmail;
    }
    capFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    generateName() {
        return this.capFirst(names[this.getRandomInt(0, names.length + 1)]);
    }
}

export default Utils