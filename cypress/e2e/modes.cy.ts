/// <reference types='cypress' />
describe('Play mode', () => {
  //confirm the current mode is "Easy"
  //confirm the number of empty cells
  //change the mode to "Medium"
  //confirm the number of empty cells
  //change the mode to "Hard"
  //confirm the number of empty cells
  it('Shows the different number of empty cells', () => {
    cy.visit('/')
    cy.get('select[name=status__difficulty-select]')
    .should('have.value', 'Easy')
    cy.get('.game__cell--filled')
    .should('have.length.greaterThan', 40)
    .and('have.length.lessThan', 81)
    .its('length')
    .as('easyN')
    
      cy.get('select[name=status__difficulty-select]')
      .select ('Medium')
      cy.get('.game__cell--filled')
      .should('have.length.lessThan', 81)
      .its('length')
      .as('mediumN')
     
        cy.get('select[name=status__difficulty-select]')
        .select ('Hard')
        cy.get('.game__cell--filled')
        .should('have.length.lessThan', 81)
        .its('length')
        .as('hardN')

        .then(function() {
          expect(this.easyN, 'easy').to.be.greaterThan(this.mediumN)
          expect(this.mediumN, 'medium').to.be.greaterThan(this.hardN)
        })

      })
    })

    