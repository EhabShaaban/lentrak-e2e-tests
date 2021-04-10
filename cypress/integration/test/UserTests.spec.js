/// <reference types="Cypress" />

import DashboardPage from '../page/DashboardPage'
import UserPage from '../page/UserPage'
import Utils from '../utils/Utils'

const utils = new Utils()
const userPage = new UserPage()
const dashboardPage = new DashboardPage()

describe('User test suite', function() {

    let loginCredentials
    let userData

    before(() => {
    cy.fixture('login_credentials').then(cred => loginCredentials = cred)
    cy.fixture('create_user_data').then(usr => userData = usr)
    })

    beforeEach(function(){
        cy.visit('/')
        utils.login(loginCredentials.dev.username, loginCredentials.dev.passwd)
    })

    it('Create new user in Sales department with most of the roles', function(){
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./users')
        userPage.clickAddUserBtn();
        userPage.firstNameID().type(userData.user.firstName)
        userPage.lastNameID().type(userData.user.lastName)
        userPage.emailID().type(utils.makeEmail())
        userPage.contactID().type(userData.user.contact)
        userPage.salesID().type(userData.user.salesRegNo)
        userPage.titleID().type(userData.user.title)
        userPage.departmentID().type(userData.department[0]).type('{enter}')
        for(var i = 1; i <=4; i++){
            userPage.roleID().type(userData.role[i], {force: true}).type('{enter}')
        }
        userPage.clickSaveNewUser()
        userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    })

    it('Create new user in IT department with Services & Admin role', function(){
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./users')
        userPage.clickAddUserBtn();
        userPage.firstNameID().type(userData.user.firstName)
        userPage.lastNameID().type(userData.user.lastName)
        userPage.emailID().type(utils.makeEmail())
        userPage.contactID().type(userData.user.contact)
        userPage.salesID().type(userData.user.salesRegNo)
        userPage.titleID().type(userData.user.title)
        userPage.departmentID().type(userData.department[1]).type('{enter}')
        userPage.roleID().type(userData.role[5], {force: true}).type('{enter}')
        userPage.roleID().type(userData.role[6], {force: true}).type('{enter}')
        userPage.clickSaveNewUser()
        userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    })
    
    it('Create new user in Accountants department with Accounting role', function(){
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./users')
        userPage.clickAddUserBtn();
        userPage.firstNameID().type(userData.user.firstName)
        userPage.lastNameID().type(userData.user.lastName)
        userPage.emailID().type(utils.makeEmail())
        userPage.contactID().type(userData.user.contact)
        userPage.salesID().type(userData.user.salesRegNo)
        userPage.titleID().type(userData.user.title)
        userPage.departmentID().type(userData.department[2]).type('{enter}')
        userPage.roleID().type(userData.role[4], {force: true}).type('{enter}')
        userPage.clickSaveNewUser()
        userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    })

    it('Create new user in Marketing department with Marketing role', function(){
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./users')
        userPage.clickAddUserBtn();
        userPage.firstNameID().type(userData.user.firstName)
        userPage.lastNameID().type(userData.user.lastName)
        userPage.emailID().type(utils.makeEmail())
        userPage.contactID().type(userData.user.contact)
        userPage.salesID().type(userData.user.salesRegNo)
        userPage.titleID().type(userData.user.title)
        userPage.departmentID().type(userData.department[3]).type('{enter}')
        userPage.roleID().type(userData.role[1], {force: true}).type('{enter}')
        userPage.clickSaveNewUser()
        userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    })

    it('Create new user in Service department with Services role', function(){
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./users')
        userPage.clickAddUserBtn();
        userPage.firstNameID().type(userData.user.firstName)
        userPage.lastNameID().type(userData.user.lastName)
        userPage.emailID().type(utils.makeEmail())
        userPage.contactID().type(userData.user.contact)
        userPage.salesID().type(userData.user.salesRegNo)
        userPage.titleID().type(userData.user.title)
        userPage.departmentID().type(userData.department[4]).type('{enter}')
        userPage.roleID().type(userData.role[5], {force: true}).type('{enter}')
        userPage.clickSaveNewUser()
        userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    })

    it('Create new user in Sales department with Sales role', function(){
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./users')
        userPage.clickAddUserBtn();
        userPage.firstNameID().type(userData.user.firstName)
        userPage.lastNameID().type(userData.user.lastName)
        userPage.emailID().type(utils.makeEmail())
        userPage.contactID().type(userData.user.contact)
        userPage.salesID().type(userData.user.salesRegNo)
        userPage.titleID().type(userData.user.title)
        userPage.departmentID().type(userData.department[0]).type('{enter}')
        userPage.roleID().type(userData.role[2], {force: true}).type('{enter}')
        userPage.clickSaveNewUser()
        userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    })
})