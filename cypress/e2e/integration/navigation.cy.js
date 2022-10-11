describe('Navigation test', () => {

  beforeEach(()=>{
    cy.visit('/')
  })
  
  it('Navigation should change aplication container', () => {

    cy.get('[data-cy="games-button"]').click();
    cy.waitForAnimation();

    cy.get('[data-cy="app__title"]').contains('AIM TRAINER').should('be.visible');
    cy.get('[data-cy="app__title"]').contains('PAPER, SCISSORS, ROCK').should('be.visible');
    cy.get('[data-cy="app__title"]').contains('TIC-TAC-TOE').should('be.visible');

    cy.get('#info-button').click();
    cy.waitForAnimation();

    cy.get('[data-cy="info"]').should('be.visible')

    cy.get('#tools-button').click();
    cy.waitForAnimation();

    cy.get('[data-cy="app__title"]').contains('TO-DO').should('be.visible');
    cy.get('[data-cy="app__title"]').contains('Notes').should('be.visible');
    cy.get('[data-cy="app__title"]').contains('Calculator').should('be.visible');

  })
})