describe('Rock paper scissors game test', () => {

    beforeEach(()=>{
          cy.visit('/games/rock-paper-scissors/index.html')
        })
        
        it('Should display alert if dificulty level is not picked', () => {
            cy.get("[data-cy='play-btn']").click()
            cy.on('window:alert',(t)=>{
                expect(t).to.contains('Wybierz łapkę mordko');
             })
        })

        it('Should pick every option and start play', () => {

            cy.get("[data-cy='option-rock']").click()
            cy.get("[data-cy='play-btn']").click()
            cy.get("[data-cy='number-of-games']").contains('1')

            cy.get("[data-cy='option-paper']").click()
            cy.get("[data-cy='play-btn']").click()
            cy.get("[data-cy='number-of-games']").contains('2')

            cy.get("[data-cy='option-scissors']").click()
            cy.get("[data-cy='play-btn']").click()
            cy.get("[data-cy='number-of-games']").contains('3')
            
        })

  })