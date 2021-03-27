/// <reference types="Cypress" />

class TodoPage
{
    visit()
    {
        cy.visit(Cypress.config().baseUrl);
        return this
    }
}

export default TodoPage