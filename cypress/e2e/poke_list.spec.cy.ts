/// <reference types="cypress" />

describe('Pokemon List App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/pokemons?page=1')
  })

  it('frontpage can be opened and work properly', () => {
    cy.contains('DEUNA React Challenge')
  })

  it('frontpage find About link on navbar', () => {
    cy.contains('About')
  })

  it('can find next button of pagination', () => {
    cy.contains('Next')
  })

  it('can find prev button of pagination', () => {
    cy.contains('Prev')
  })

  it('next button can be clicked and change page number', () => {
    cy.contains('Next').click()
    cy.contains('Ekans')
    cy.contains('Page 2')
  })
})