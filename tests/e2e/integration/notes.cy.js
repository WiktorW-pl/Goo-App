describe('Todo app test', () => {

    beforeEach(()=>{
      cy.visit('/');
      cy.waitForAnimation();
      cy.get('#go-to-notes').click();
    })
    
    it('Should add some text to textarea and change styles of added text', () => {

      cy.get('[data-cy="content"]').type('Text example')
      cy.get('[data-cy="content"]').type('{selectall}')

      cy.get('[data-cy="bold-btn"]').click();
      cy.get('b').should('have.css', 'font-weight', '700');

      cy.get('[data-cy="italic-btn"]').click()
      cy.get('i').should('be.visible');
      
      cy.get('[data-cy="underline-btn"]').click()
      cy.get('u').should('be.visible');

    })

    it('Should create new file', ()=>{
       cy.get('[data-cy="btn-download"]').select('new');
       cy.get('[data-cy="btn-pdf-submit"]').click();
       cy.get('[data-cy="content"]').should("have.value", "")
    })

    it('Should add note title, download it and then leave the aplication', ()=>{

        cy.get('[data-cy="content"]').type('Text example')
        cy.get('[data-cy="text-tools__file-name-input"]').type('Title of file')
        cy.get('[data-cy="btn-download"]').select('txt');
        cy.get('[data-cy="btn-pdf-submit"]').click();
        cy.readFile("./cypress/downloads/Title of file.txt").should('contain', 'Text example');

        cy.get('[data-cy="btn-download"]').select('pdf');
        cy.get('[data-cy="btn-pdf-submit"]').click();
        cy.readFile("./cypress/downloads/Title of file.pdf");

        cy.get('[data-cy="back-to-main-page-btn"]').click();
        cy.waitForAnimation();
        cy.get('[data-cy="app__title"]').contains('TO-DO')
            .should('be.visible');

    })

  })