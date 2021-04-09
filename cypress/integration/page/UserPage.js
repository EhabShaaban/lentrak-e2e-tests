/// <reference types="Cypress" />

class UserPage
{
    visitUsers()
    {
        cy.visit(Cypress.config('baseUrl')+'users');
        return this
    }
}

export default UserPage