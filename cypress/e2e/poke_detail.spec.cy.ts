/// <reference types="cypress" />

describe('Pokemon List App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/pokemon/1')
  })

  it('Pokemon detail page opened properly and can click on the go back button', () => {
    cy.contains('Go back')
  })

  it('Pokemon detail page show the pokemon types', () => {
    cy.contains('Height')
    cy.contains('Weight')
  })
})