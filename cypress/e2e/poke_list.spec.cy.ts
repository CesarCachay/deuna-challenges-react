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

  it('can find next buttons of pagination', () => {
    cy.contains('Next')
    cy.contains('Prev')
  })

  it('should request pokeapi to show 20 first results', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0').as('getPokemons')
    cy.wait(['@getPokemons'])
    cy.get('@getPokemons').should('have.property', 'response')
    cy.get('h2').first().contains('#0001')
  })

  it('next button can be clicked and change page number', () => {
    cy.contains('Next').click()
    cy.contains('Ekans')
    cy.contains('Page 2')
  })
});

describe('After clicking next page', () => {
  it('after going to page 2 should request next 20 pokemons', () => {
    cy.visit('http://localhost:5173/pokemons?page=1')
    cy.get('[data-cy="pokemon-list"]').should('be.visible')
    cy.get('[data-cy="next-button-option"]').click()
    cy.intercept({ pathname: 'https://pokeapi.co/api/v2/pokemon/?offset=20', method: 'GET' })
    cy.url().should('include', 'page=2')
    cy.contains('Nidoqueen')
  })

  it('after going to page 2, user selects Nidoqueen and should see their details', () => {
    cy.visit('http://localhost:5173/pokemons?page=1')
    cy.get('[data-cy="pokemon-list"]').should('be.visible')
    cy.get('[data-cy="next-button-option"]').click()
    cy.intercept({ pathname: 'https://pokeapi.co/api/v2/pokemon/?offset=20', method: 'GET' })
    cy.url().should('include', 'page=2')
    cy.contains('Nidoqueen').click()
    cy.url().should('include', 'pokemon/31')
    cy.contains('Name: Nidoqueen')
  })
});