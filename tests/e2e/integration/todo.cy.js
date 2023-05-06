describe('Todo app test', () => {

    beforeEach(()=>{
      cy.visit('/');
      cy.waitForAnimation();
      cy.get('[data-cy="go-to-todo"]').click();
    })
    
    it('Should add task as empty input when button is clicked', () => {

      cy.get('[data-cy="button-add"]').click();
      cy.get('.task__input').should('be.visible')
      
    })

    it('Should add example text and add priority-color to created task', ()=>{

        cy.get('[data-cy="button-add"]').click();
        cy.get('.task__input').should('be.visible');
        cy.get('.task__input').type('Example task content');
        cy.get('.color').click()
          .should('have.css', 'border-right', '5px solid rgb(189, 255, 0)');

    })

    it('Should delate a checked task and leave aplication', ()=>{
        cy.get('[data-cy="button-add"]').click();
        cy.get('.task__input').should('be.visible');
        cy.get('.task__input').type('Example task content');
        cy.get('.task__checkbox').click();
        cy.get('[data-cy="button-remove"]').click();
        cy.get('.task__input')
            .should('not.exist');

        cy.get('[data-cy="back-to-main-page-btn"]').click()
        cy.waitForAnimation();
        cy.get('[data-cy="app__title"]').contains('TO-DO')
            .should('be.visible');
    })
  })