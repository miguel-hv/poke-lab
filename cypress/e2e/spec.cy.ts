describe('My First Test', () => {
  it('Visit pokeLab', () => {
    cy.visit('http://localhost:4200');
    cy.login('user555');
  })
})