Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
describe('Check the radio buttons', ()=>{
    beforeEach(() =>{
        cy.visit('/radio-button')
        cy.get('h1').contains('Radio Button')

    })
    it('should be able to check the radio button',()=>{
        cy.get('#yesRadio').focus().check({force:true})
        cy.get('p[class="mt-3"]').should('be.visible').contains('You have selected ')
        cy.get('span[class="text-success"]').should('be.visible').contains('Yes')
    })
    it('should not be able to check the disable radio button', ()=>{
        cy.get('#noRadio').should('be.disabled')
    })
})