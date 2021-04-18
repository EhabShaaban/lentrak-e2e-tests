/// <reference types="Cypress" />

class UserPage
{
    // './user/ > add user btn 
    addUserBtn(){
        return cy.get("button[class='ant-btn sc-eCssSg bjuFNh bredcrumb-action-btn-large-screen ml15']")
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

    // action methods
    clickAddUserBtn(){
        return this.addUserBtn().click();
    }
    clickSaveNewUser(){
        return this.saveUserBtn().click().wait(1500);
    }
}

export default UserPage