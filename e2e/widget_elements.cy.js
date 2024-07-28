const { should } = require("chai");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
describe('widget elements', ()=>{
    it('should be to able to check the tooltips', ()=>{
        cy.visit('/tool-tips')
        cy.get('#toolTipButton').trigger('mouseover')
        cy.get('.tooltip-inner').contains('You hovered over the Button')
        cy.get('#toolTipTextField').trigger('mouseover')
        cy.get('.tooltip-inner').eq(1).contains('You hovered over the text field')
        cy.get('[href="javascript:void(0)"]').contains('Contrary').trigger('mouseover')
        cy.get('.tooltip-inner').contains('You hovered over the Contrary')
    })

    it('should be able to auto complete',()=>{
        cy.visit('/auto-complete')
        cy.get('#autoCompleteMultipleContainer').type('bl')
        cy.get('.auto-complete__menu').should('be.visible')
        cy.get('.auto-complete__option').contains('Blue').first().click()
        cy.get('#autoCompleteMultipleContainer').contains('Blue')
        cy.get('#autoCompleteMultipleContainer').type('re')
        cy.get('.auto-complete__menu').should('be.visible')
        cy.get('.auto-complete__option').contains('Red').first().click()
        cy.get('#autoCompleteMultipleContainer').contains('Red')
        cy.get('.auto-complete__value-container').should('have.length', 2)
        cy.get('#autoCompleteSingleContainer').type('pu')
        cy.get('.auto-complete__menu').should('be.visible')
        cy.get('.auto-complete__option').contains('Purple').first().click()
        cy.get('#autoCompleteSingleContainer').type('whi')
        cy.get('.auto-complete__menu').should('be.visible')
        cy.get('.auto-complete__option').contains('White').first().click()
        cy.get('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container').should('have.length', 1)

    })
    it('should be able to go from tab to tab', ()=>{
        cy.visit('/tabs')
        cy.get('#demo-tab-what').should('have.attr', 'aria-selected','true')
        cy.get('#demo-tabpane-what').contains('Lorem Ipsum is simply dummy')
        cy.get('#demo-tab-origin').click()
        cy.get('#demo-tabpane-origin').contains('Contrary to popular belief')
        cy.get('#demo-tab-origin').should('have.attr', 'aria-selected','true')
        cy.get('#demo-tab-what').should('have.attr', 'aria-selected','false')
        cy.get('#demo-tab-more').should('have.class', 'disabled')
    })
    it('should be able to stop the progress bar',()=>{
        cy.visit('/progress-bar')
        cy.get('#startStopButton').click()
        const checkProgressBar = () => {
            cy.get('div[role="progressbar"]').then($progressBar => {
              const progressValue = parseInt($progressBar.attr('aria-valuenow'), 10)
      
              if (progressValue >= 35) {
                cy.get('#startStopButton').click()
              } else {
                cy.wait(100).then(checkProgressBar)
              }
            })
          }
          cy.wait(500).then(checkProgressBar);
    })
})


