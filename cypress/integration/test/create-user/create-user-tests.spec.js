/// <reference types="Cypress" />

import {adaptToReduxPersist} from '../../utils/redux'
import DashboardPage from '../../page/dashboard-page'
import UserPage from '../../page/user-page'
import Utils from '../../utils/utils'
import createUserCore from '../helpers/create-user/user-core'

const utils = new Utils()
const userPage = new UserPage()
const dashboardPage = new DashboardPage()

let userData
let loginCredentials

describe('create users suite', function() {

    before(function() {

        cy.fixture('create_user_data').then(function(usr) {userData = usr})

        cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWD")).then(function(creds) {loginCredentials = creds})

    })

    beforeEach(function(){

        cy.visit('./users', {
            onBeforeLoad (win) {
                win.localStorage.setItem('persist:root', adaptToReduxPersist(loginCredentials))
            }
        })

        userPage.addUserBtn().should('have.text', 'Add User')

        createUserCore()
    })

    it('create new user in sales department with multiple roles', function(){
        
        let roles =[
            userData.role.marketing,
            userData.role.sales,
            userData.role.finance,
            userData.role.accounting,
            userData.role.services,
            userData.role.admin
        ]

        userPage.departmentID().type(userData.department.sales).type('{enter}')
        userPage.selectMultipleRoles(...roles)

    })

    it('create new user in sales department with multiple roles', function(){
        
        let roles =[
            userData.role.sales,
            userData.role.accounting,
            userData.role.admin
        ]

        userPage.departmentID().type(userData.department.sales).type('{enter}')
        userPage.selectMultipleRoles(...roles)

    })

    it('create new user in IT department with services role', function(){
        userPage.slectDepartmentAndRole(userData.department.it, userData.role.services)
    })
    
    it('create new user in accountants department with accounting role', function(){
        userPage.slectDepartmentAndRole(userData.department.accountants, userData.role.accounting)
    })

    it('create new user in marketing department with marketing role', function(){
        userPage.slectDepartmentAndRole(userData.department.marketing, userData.role.marketing)
    })

    it('create new user in service department with services role', function(){
        userPage.slectDepartmentAndRole(userData.department.service, userData.role.services)
    })

    it('create new user in sales department with sales role', function(){
        userPage.slectDepartmentAndRole(userData.department.sales, userData.role.sales)
    })

    it('create new user in IT department with admin role', function(){
        userPage.slectDepartmentAndRole(userData.department.it, userData.role.admin)
    })

    it('create new user in IT department with sales role', function(){
        userPage.slectDepartmentAndRole(userData.department.it, userData.role.sales)
    })

    it('create new user in sales department with admin role', function(){
        userPage.slectDepartmentAndRole(userData.department.sales, userData.role.admin)
    })

    it('create new user in accountants department with marketing role', function(){
        userPage.slectDepartmentAndRole(userData.department.accountants, userData.role.marketing)
    })

    it('create new user in marketing department with finance role', function(){
        userPage.slectDepartmentAndRole(userData.department.marketing, userData.role.finance)
    })

    it('create new user in IT department with admin role', function(){
        userPage.slectDepartmentAndRole(userData.department.it, userData.role.services)
    })

    it('create new user in accountants department with admin role', function(){
        userPage.slectDepartmentAndRole(userData.department.accountants, userData.role.admin)
    })


    afterEach(function(){

        userPage.clickSaveNewUser()
        userPage.newUserSuccessMsg().should('have.text','User added successfully.')

    })
})

// describe('Negative/User creation test suite', function() {

//     before(function() {
//         cy.fixture('create_user_data').then(function(usr) {userData = usr})
//         })
        
//     beforeEach(function(){
//         cy.visit('/')
//         utils.login(Cypress.env('username'), Cypress.env('passwd'))
//         dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
//         cy.visit('./users')
//         userPage.clickAddUserBtn();
//     })

//     it('NEG/Create new user with existing email', function(){
//         userPage.firstNameID().type(utils.generateName())
//         userPage.lastNameID().type(utils.generateName())
//         userPage.emailID().type(userData.user.emailID)
//         userPage.contactID().type(userData.user.contact)
//         userPage.salesID().type(userData.user.salesRegNo)
//         userPage.titleID().type(userData.user.title)
//         userPage.departmentID().type(userData.department[0]).type('{enter}')
//         userPage.roleID().type(userData.role[2], {force: true}).type('{enter}')
//         userPage.clickSaveNewUser()
//         userPage.emailExists().should('have.text', 'User with this email exists')
//     })

// })