/// <reference types="Cypress" />

import DashboardPage from '../../page/dashboard-page'
import UserPage from '../../page/user-page'
import Utils from '../../utils/utils'

const utils = new Utils()
const userPage = new UserPage()
const dashboardPage = new DashboardPage()

let userData

describe('Valid user creation test suite', function() {

    before(() => {
    cy.fixture('create_user_data').then(usr => userData = usr)
    })

    beforeEach(function(){
        cy.visit('/')
        utils.login(Cypress.env('username'), Cypress.env('passwd'))
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./users')
        userPage.clickAddUserBtn();
        userPage.firstNameID().type(utils.generateName())
        userPage.lastNameID().type(utils.generateName())
        userPage.emailID().type(utils.makeEmail())
        userPage.contactID().type(userData.user.contact)
        userPage.salesID().type(userData.user.salesRegNo)
        userPage.titleID().type(userData.user.title)
    })

    it('Create new user in Sales department with most of the roles', function(){
        userPage.departmentID().type(userData.department[0]).type('{enter}')
        for(var i = 1; i <=4; i++){
            userPage.roleID().type(userData.role[i], {force: true}).type('{enter}')
        }
    })

    it('Create new user in IT department with Services & Admin role', function(){
        userPage.departmentID().type(userData.department[1]).type('{enter}')
        userPage.roleID().type(userData.role[5], {force: true}).type('{enter}')
        userPage.roleID().type(userData.role[6], {force: true}).type('{enter}')
    })
    
    it('Create new user in Accountants department with Accounting role', function(){
        userPage.departmentID().type(userData.department[2]).type('{enter}')
        userPage.roleID().type(userData.role[4], {force: true}).type('{enter}')
    })

    it('Create new user in Marketing department with Marketing role', function(){
        userPage.departmentID().type(userData.department[3]).type('{enter}')
        userPage.roleID().type(userData.role[1], {force: true}).type('{enter}')
    })

    it('Create new user in Service department with Services role', function(){
        userPage.departmentID().type(userData.department[4]).type('{enter}')
        userPage.roleID().type(userData.role[5], {force: true}).type('{enter}')
    })

    it('Create new user in Sales department with Sales role', function(){
        userPage.departmentID().type(userData.department[0]).type('{enter}')
        userPage.roleID().type(userData.role[2], {force: true}).type('{enter}')
    })

    afterEach(function(){
        userPage.clickSaveNewUser()
        userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    })
})

describe('Negative/User creation test suite', function() {

    before(() => {
        cy.fixture('create_user_data').then(usr => userData = usr)
        })
        
    beforeEach(function(){
        cy.visit('/')
        utils.login(Cypress.env('username'), Cypress.env('passwd'))
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./users')
        userPage.clickAddUserBtn();
    })

    it('NEG/Create new user with existing email', function(){
        userPage.firstNameID().type(utils.generateName())
        userPage.lastNameID().type(utils.generateName())
        userPage.emailID().type(userData.user.emailID)
        userPage.contactID().type(userData.user.contact)
        userPage.salesID().type(userData.user.salesRegNo)
        userPage.titleID().type(userData.user.title)
        userPage.departmentID().type(userData.department[0]).type('{enter}')
        userPage.roleID().type(userData.role[2], {force: true}).type('{enter}')
        userPage.clickSaveNewUser()
        userPage.emailExists().should('have.text', 'User with this email exists')
    })

})