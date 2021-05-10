/// <reference types="Cypress" />

import {adaptToReduxPersist} from '../../utils/redux'
import UserPage from '../../page/user-page'
import createUserCore from '../helpers/create-user/user-core'
import assetUser from '../helpers/create-user/user-assert'
import faker from 'faker'

const userPage = new UserPage()

let userCardInfo
let loginCredentials

describe('create users suite', function() {

    before(function() {

        cy.fixture('create_user_data').then(function(usr) {userCardInfo = usr})

        cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWD")).then(function(creds) {loginCredentials = creds})

    })

    beforeEach(function(){

        let usrInfo = {
            firstName     : faker.name.firstName(),
            lastName      : faker.name.lastName(),
            email         : faker.internet.email(),
            contactNumber : faker.phone.phoneNumber(),
            salesNumber   : faker.finance.account(),
            title         : faker.name.title()
        }

        cy.visit('./users', {
            onBeforeLoad (win) {
                win.localStorage.setItem('persist:root', adaptToReduxPersist(loginCredentials))
            }
        })

        userPage.addUserBtn().should('have.text', 'Add User')

        createUserCore({usrInfo : usrInfo})

        assetUser({usrInfo:usrInfo})
    })

    it('create new user in sales department with multiple roles', function(){
        
        let roles =[
            userCardInfo.role.marketing,
            userCardInfo.role.sales,
            userCardInfo.role.finance,
            userCardInfo.role.accounting,
            userCardInfo.role.services,
            userCardInfo.role.admin
        ]

        userPage.departmentID().type(userCardInfo.department.sales).type('{enter}')
        userPage.selectMultipleRoles(...roles)

    })

    it('create new user in sales department with multiple roles', function(){
        
        let roles =[
            userCardInfo.role.sales,
            userCardInfo.role.accounting,
            userCardInfo.role.admin
        ]

        userPage.departmentID().type(userCardInfo.department.sales).type('{enter}')
        userPage.selectMultipleRoles(...roles)

    })

    it('create new user in IT department with services role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.it, userCardInfo.role.services)
    })
    
    it('create new user in accountants department with accounting role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.accountants, userCardInfo.role.accounting)
    })

    it('create new user in marketing department with marketing role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.marketing, userCardInfo.role.marketing)
    })

    it('create new user in service department with services role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.service, userCardInfo.role.services)
    })

    it('create new user in sales department with sales role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.sales, userCardInfo.role.sales)
    })

    it('create new user in IT department with admin role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.it, userCardInfo.role.admin)
    })

    it('create new user in IT department with sales role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.it, userCardInfo.role.sales)
    })

    it('create new user in sales department with admin role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.sales, userCardInfo.role.admin)
    })

    it('create new user in accountants department with marketing role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.accountants, userCardInfo.role.marketing)
    })

    it('create new user in marketing department with finance role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.marketing, userCardInfo.role.finance)
    })

    it('create new user in IT department with admin role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.it, userCardInfo.role.services)
    })

    it('create new user in accountants department with admin role', function(){
        userPage.slectDepartmentAndRole(userCardInfo.department.accountants, userCardInfo.role.admin)
    })

    afterEach(function(){

        userPage.clickSaveNewUser()
        userPage.newUserSuccessMsg().should('have.text','User added successfully.')

    })
})

describe('negative/create users suite', function() {

    before(function() {

        cy.fixture('create_user_data').then(function(usr) {userCardInfo = usr})

        cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWD")).then(function(creds) {loginCredentials = creds})

    })

    beforeEach(function(){

        let usrInfo = {
            firstName     : faker.name.firstName(),
            lastName      : faker.name.lastName(),
            email         : userCardInfo.user.email,
            contactNumber : faker.phone.phoneNumber(),
            salesNumber   : faker.finance.account(),
            title         : faker.name.title()
        }

        cy.visit('./users', {
            onBeforeLoad (win) {
                win.localStorage.setItem('persist:root', adaptToReduxPersist(loginCredentials))
            }
        })

        userPage.addUserBtn().should('have.text', 'Add User')

        createUserCore({usrInfo : usrInfo})
    })

    it('NEG/Create new user with existing email', function(){
        userPage.departmentID().type(userCardInfo.department.it).type('{enter}')
        userPage.roleID().type(userCardInfo.role.admin, {force: true}).type('{enter}')
    })

    afterEach(function(){

        userPage.clickSaveNewUser()
        userPage.emailExists().should('have.text', 'User with this email exists')

    })

})