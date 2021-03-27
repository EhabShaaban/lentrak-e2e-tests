/// <reference types="Cypress" />

import TodoPage from '../page/TodoPage'

describe('visual suite', function() {

    it('first visual test', function(){
        const todoPage = new TodoPage()
        
        todoPage.visit()
        cy.matchImageSnapshot();
    })
})