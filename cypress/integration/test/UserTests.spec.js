/// <reference types="Cypress" />

import DashboardPage from '../page/DashboardPage'
import UserPage from '../page/UserPage'
import Utils from '../utils/Utils'

const utils = new Utils()
const userPage = new UserPage()
const dashboardPage = new DashboardPage()

describe('User test suite', function() {
    beforeEach(function(){
        cy.fixture('login_credentials').as('loginCredentials')
        cy.fixture('create_user_data').as('userData')
    })
    it('Create new user', function(){
        //TODO: implement dynamic email generator
        //TODO: Negative Test/add user with existing email
        //TODO: Implement test combination methods and flows
        cy.visit('/')
        utils.login(this.loginCredentials.dev.username, this.loginCredentials.dev.passwd)
        dashboardPage.dashboardLabelDiv().should('have.text', 'Dashboard')
        cy.visit('./users')
        userPage.clickAddUserBtn();
        userPage.firstNameID().type(this.userData.user.firstName)
        userPage.lastNameID().type(this.userData.user.lastName)
        userPage.emailID().type(this.userData.user.emailID)
        userPage.contactID().type(this.userData.user.contact)
        userPage.salesID().type(this.userData.user.salesRegNo)
        userPage.titleID().type(this.userData.user.title)
        userPage.departmentID().type(this.userData.department[0]).type('{enter}')
        for(var i = 1; i <=4; i++){
            userPage.roleID().type(this.userData.role[i], {force: true}).type('{enter}')
        }
        userPage.clickSaveNewUser()
        userPage.newUserSuccessMsg().should('have.text','User added successfully.')
    })
})