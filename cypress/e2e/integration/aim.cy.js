describe('Aim trainer test', () => {

    beforeEach(()=>{
      cy.visit('/games/aim/index.html')
    })
    
    it('Should display alert if dificulty level is not picked', () => {
        cy.get("[data-cy='play-btn']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Wybierz poziom trudności');
         })
    })

    it('Should get 29 points on easy dificulty level', ()=>{
        cy.get("[data-cy='difficulty-easy']").click();
        cy.get("[data-cy='play-btn']").click()
        for(let i=0; i<=28; i++){
            cy.get('.dot').click()
        }
        cy.get("[data-cy='score']").contains('29')
    })
    
    it('Should get 29 points on medium dificulty level', ()=>{
        cy.get("[data-cy='difficulty-medium']").click();
        cy.get("[data-cy='play-btn']").click()
        for(let i=0; i<=28; i++){
            cy.get('.dot').click()
        }
        cy.get("[data-cy='score']").contains('29')
    })

    it('Should get 28 points on hard dificulty level, and then should reset the game', ()=>{
        cy.get("[data-cy='difficulty-medium']").click();
        cy.get("[data-cy='play-btn']").click()
        for(let i=0; i<=28; i++){
            cy.get('.dot').click()
        }
        cy.get("[data-cy='score']").contains('29')
        cy.get("[data-cy='reset-btn']").click();
    })
  })
