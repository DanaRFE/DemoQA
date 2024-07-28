Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

describe('Web tables actions', ()=>{
    beforeEach(()=>{
        cy.visit('/webtables')
        cy.get('h1').should('have.text','Web Tables')
    })

    it('should be able to add a new item',()=>{
        cy.newItem('Dana', 'Romaniuc', 'test@gmail.com','21', '4000', 'PROD')
        cy.get('.rt-tbody').should('contain','Dana')
    })

    it('should not be able to add a new item with an invalid email',()=>{
        cy.newItem('Dana', 'Romaniuc', 'test','21', '4000', 'PROD')
        cy.get('#userEmail').should('have.css','border-color', 'rgb(220, 53, 69)')
    })
  
    it('should be able to delete an item',()=>{
        cy.newItem('Dana', 'Romaniuc', 'test@gmail.com','21', '4000', 'PROD')
        cy.contains('.rt-tr-group','Dana')
          .find('#edit-record-4').click()
        cy.get('#registration-form-modal').should('be.visible')
        cy.get('#firstName').type('Edit')
        cy.get('#submit').click()
        cy.get('.rt-tbody').should('contain','DanaEdit')
    })

    
    it('should be able to delete an item',()=>{
        cy.newItem('Dana', 'Romaniuc', 'test@gmail.com','21', '4000', 'PROD')
        cy.contains('.rt-tr-group','Dana')
          .find('#delete-record-4').click()
        cy.get('.rt-tbody').should('not.contain','Dana')
    })
    
    
    it('should be able to search a specific item',()=>{
        cy.get('#searchBox').type('Alden')
        cy.get('.rt-tbody').should('contain','Alden')
    })
    

    it('should be able to display a specific number of rows',()=>{
        cy.get('select').select(0)
        cy.get('.rt-tbody .rt-tr-group').should('have.length',5)

    })
})