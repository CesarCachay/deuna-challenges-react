/// <reference types="cypress" />

describe('Pokemon List App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/pokemon/1')
  })

  it('Pokemon detail page should show loading while fetching', () => {
    cy.get('[data-cy="loading-text"]').should('contain', 'Loading pokemon detail ...')
  })

  it('Pokemon detail page show the pokemon types', () => {
    cy.contains('Height')
    cy.contains('Weight')
  })

  it('should request pokeapi to retrieve data of selected pokemon', () => {
    cy.visit('http://localhost:5173/pokemon/6')
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/6/', () => {
      cy.get('[data-cy="pokemon-name-text"]').should('contain.text', 'Name: Charizard')
    })
  })

  it('User clicks on DEUNA React Challenge to go back to pokemon list page', () => {
    cy.contains('DEUNA React Challenge').click()
    cy.contains('Charmander')
  })

  it('When user goes back to the pokemon list should request for the first 20 pokemons', () => {
    cy.contains('DEUNA React Challenge').click()
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0').as('getPokemons')
    cy.visit('http://localhost:5173/pokemons?page=1')
    cy.wait(['@getPokemons'])
    cy.get('@getPokemons').should('have.property', 'response')
    cy.get('h2').first().contains('#0001')
  })
})