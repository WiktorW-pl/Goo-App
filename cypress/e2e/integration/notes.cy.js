describe('Todo app test', () => {

    beforeEach(()=>{
      cy.visit('/');
      cy.waitForAnimation();
      cy.get('#go-to-notes').click();
    })
    
    it('Should add some text to textarea and change styles of added text', () => {

      cy.get('#content').type('Text example')
      cy.get('#content').type('{selectall}')

      cy.get('#bold-btn').click();
      cy.get('b').should('have.css', 'font-weight', '700');

      cy.get('#italic-btn').click()
      cy.get('i').should('be.visible');
      
      cy.get('#underline-btn').click()
      cy.get('u').should('be.visible');

    })

    it('Should create new file', ()=>{
       cy.get('.btn-download').select('new');
       cy.get('.btn-pdf-submit').click();
       cy.get('#content').should("have.value", "")
    })

    it('Should add note title, download it and then leave the aplication', ()=>{

        cy.get('#content').type('Text example')
        cy.get('.text-tools__file-name-input').type('Title of file')
        cy.get('.btn-download').select('txt');
        cy.get('.btn-pdf-submit').click();
        cy.readFile("./cypress/downloads/Title of file.txt").should('contain', 'Text example');

        cy.get('.btn-download').select('pdf');
        cy.get('.btn-pdf-submit').click();
        cy.readFile("./cypress/downloads/Title of file.pdf");

        cy.get('a[href="../../index.html"]').click();
        cy.waitForAnimation();
        cy.get('.app__title').contains('TO-DO')
            .should('be.visible');

    })

  })