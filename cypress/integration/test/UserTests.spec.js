/// <reference types="Cypress" />

import DashboardPage from '../page/DashboardPage'
import UserPage from '../page/UserPage'
import Utils from '../utils/Utils'

const utils = new Utils()
const userPage = new UserPage()
const dashboardPage = new DashboardPage()

//TODO: fix random names, finish neg test  

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
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')

    })

    it('Create new user in Sales department with most of the roles', function(){
        cy.visit('./users')
        userPage.clickAddUserBtn();
        userPage.firstNameID().type(utils.generateName())
        userPage.lastNameID().type(utils.generateName())
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

    // it('Create new user in IT department with Services & Admin role', function(){
    //     cy.visit('./users')
    //     userPage.clickAddUserBtn();
    //     userPage.firstNameID().type(userData.user.firstName)
    //     userPage.lastNameID().type(userData.user.lastName)
    //     userPage.emailID().type(utils.makeEmail())
    //     userPage.contactID().type(userData.user.contact)
    //     userPage.salesID().type(userData.user.salesRegNo)
    //     userPage.titleID().type(userData.user.title)
    //     userPage.departmentID().type(userData.department[1]).type('{enter}')
    //     userPage.roleID().type(userData.role[5], {force: true}).type('{enter}')
    //     userPage.roleID().type(userData.role[6], {force: true}).type('{enter}')
    //     userPage.clickSaveNewUser()
    //     userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    // })
    
    // it('Create new user in Accountants department with Accounting role', function(){
    //     cy.visit('./users')
    //     userPage.clickAddUserBtn();
    //     userPage.firstNameID().type(userData.user.firstName)
    //     userPage.lastNameID().type(userData.user.lastName)
    //     userPage.emailID().type(utils.makeEmail())
    //     userPage.contactID().type(userData.user.contact)
    //     userPage.salesID().type(userData.user.salesRegNo)
    //     userPage.titleID().type(userData.user.title)
    //     userPage.departmentID().type(userData.department[2]).type('{enter}')
    //     userPage.roleID().type(userData.role[4], {force: true}).type('{enter}')
    //     userPage.clickSaveNewUser()
    //     userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    // })

    // it('Create new user in Marketing department with Marketing role', function(){
    //     cy.visit('./users')
    //     userPage.clickAddUserBtn();
    //     userPage.firstNameID().type(userData.user.firstName)
    //     userPage.lastNameID().type(userData.user.lastName)
    //     userPage.emailID().type(utils.makeEmail())
    //     userPage.contactID().type(userData.user.contact)
    //     userPage.salesID().type(userData.user.salesRegNo)
    //     userPage.titleID().type(userData.user.title)
    //     userPage.departmentID().type(userData.department[3]).type('{enter}')
    //     userPage.roleID().type(userData.role[1], {force: true}).type('{enter}')
    //     userPage.clickSaveNewUser()
    //     userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    // })

    // it('Create new user in Service department with Services role', function(){
    //     cy.visit('./users')
    //     userPage.clickAddUserBtn();
    //     userPage.firstNameID().type(userData.user.firstName)
    //     userPage.lastNameID().type(userData.user.lastName)
    //     userPage.emailID().type(utils.makeEmail())
    //     userPage.contactID().type(userData.user.contact)
    //     userPage.salesID().type(userData.user.salesRegNo)
    //     userPage.titleID().type(userData.user.title)
    //     userPage.departmentID().type(userData.department[4]).type('{enter}')
    //     userPage.roleID().type(userData.role[5], {force: true}).type('{enter}')
    //     userPage.clickSaveNewUser()
    //     userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    // })

    // it('Create new user in Sales department with Sales role', function(){
    //     cy.visit('./users')
    //     userPage.clickAddUserBtn();
    //     userPage.firstNameID().type(userData.user.firstName)
    //     userPage.lastNameID().type(userData.user.lastName)
    //     userPage.emailID().type(utils.makeEmail())
    //     userPage.contactID().type(userData.user.contact)
    //     userPage.salesID().type(userData.user.salesRegNo)
    //     userPage.titleID().type(userData.user.title)
    //     userPage.departmentID().type(userData.department[0]).type('{enter}')
    //     userPage.roleID().type(userData.role[2], {force: true}).type('{enter}')
    //     userPage.clickSaveNewUser()
    //     userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    // })

    // it('NEG/Create new user with existing email', function(){
    //     cy.visit('./users')
    //     userPage.clickAddUserBtn();
    //     userPage.firstNameID().type(userData.user.firstName)
    //     userPage.lastNameID().type(userData.user.lastName)
    //     userPage.emailID().type(utils.makeEmail())
    //     userPage.contactID().type(userData.user.contact)
    //     userPage.salesID().type(userData.user.salesRegNo)
    //     userPage.titleID().type(userData.user.title)
    //     userPage.departmentID().type(userData.department[0]).type('{enter}')
    //     userPage.roleID().type(userData.role[2], {force: true}).type('{enter}')
    //     userPage.clickSaveNewUser()
    //     userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    // })
})