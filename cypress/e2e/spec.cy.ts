describe('Check login and secrets', () => {
  it('Visit pokeLab', () => {
    cy.clearAllLocalStorage();
    cy.visit('http://localhost:4200');
    cy.login('user555');
    cy.checkPokeSelection('bulbasaur');
    cy.checkSecretRetrieval('leaf','Jardín');
    cy.checkPokeSelection('charmander');
    cy.checkSecretRetrieval('fire','Caldera');
    cy.checkPokeSelection('squirtle');
    cy.checkSecretRetrieval('water','Piscina');
    cy.url().should('include', 'the-end');
    cy.visit('http://localhost:4200');
    cy.url().should('include', 'the-end');
    cy.get('.end__button').click();
    cy.url().should('include', 'access');
  })
});
