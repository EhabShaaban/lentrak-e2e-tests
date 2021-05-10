/// <reference types="Cypress" />

let faker = require('faker');

class UserPage
{
    // './user/ > add user btn 
    addUserBtn(){
        return cy.get("button[class='ant-btn sc-jSgupP fOyugb bredcrumb-action-btn-large-screen ml15']")
    }
    firstNameID(){
        return cy.get("#first_name")
    }
    lastNameID(){
        return cy.get("#last_name")
    }
    emailID(){
        return cy.get("#email")
    }
    contactID(){
        return cy.get("#phone_number")
    }
    salesID(){
        return cy.get("#sales")
    }
    titleID(){
        return cy.get("#title")
    }
    departmentID(){
        return cy.get("#department")
    }
    roleID(){
        return cy.get("#roles")
    }
    saveUserBtn(){
        return cy.get("button[type='Submit']")
    }
    newUserSuccessMsg(){
        return cy.get("div[class='ant-message-custom-content ant-message-success'] span")
    }
    emailExists(){
        return cy.get("div[class='ant-message-custom-content ant-message-error']")
    }

    // action this page can do
    clickAddUserBtn(){
        return this.addUserBtn().click();
    }
    clickSaveNewUser(){
        return this.saveUserBtn().click().wait(1500);
    }
    typeFirstName(){
        return this.firstNameID().type(faker.name.firstName());
    }
    typeLastName(){
        return this.lastNameID().type(faker.name.lastName());
    }
    typeEmail(){
        return this.emailID().type(faker.internet.email());
    }
    typeContact(){
        return this.contactID().type(faker.phone.phoneNumber());
    }
    typeSaleNo(){
        return this.salesID().type(faker.finance.account());
    }
    typeTitle(){
        return this.titleID().type(faker.name.title());
    }
    slectDepartmentAndRole(department, role){
        this.departmentID().type(department).type('{enter}')
        this.roleID().type(role, {force: true}).type('{enter}')
    }
    selectMultipleRoles(...roles){
        for(let role of roles){
            this.roleID().type(role, {force: true}).type('{enter}')
        }
    }
}

export default UserPage