/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
// cypress/support/index.ts

Cypress.Commands.add('login', (username) => {
    // cy.visit('/access')
  
    // {enter} causes the form to submit
    cy.get('input[id=name]').type(`${username}{enter}`);
    
    // cy.clearLocalStorage();
  
    // we should be redirected to /welcome
    cy.url().should('include', '/welcome');

    //test enter without focus on button
    cy.get('body').type('{enter}');

    cy.url().should('include', '/poke');


    cy.getAllLocalStorage().then((res) => {
    const stringUserState = localStorage.getItem('userState') || 'undefined';
    expect(JSON.parse(stringUserState).currentUser.username).to.equal(username);

        // expect(JSON.parse(localStorage.getItem('userState')).to.eq()
        // expect(res).to.deep.equal({
        //    'http://localhost:4200': {
        //         userState: `{\"currentUser\":{\"email\":\"string\",\"token\":\"string\",\"username\":\"${username}\",\"bio\":\"string\",\"image\":\"string\"},\"token\":\"string\",\"errors\":{\"login\":0,\"register\":0},\"pokemon\":null,\"secrets\":[]}`
        //     }
        // });
    });
     
})
  
Cypress.Commands.add('checkPokeSelection', (pokemonName) => {
    cy.get('.menu__item').contains('Laboratorio').click();
    cy.url().should('include', 'poke/select');
    cy.get('.menu__item').contains(pokemonName).click();
    cy.focused().type('{enter}').then(() => {
    const stringUserState = localStorage.getItem('userState') || '{"pokemon": {"name": ""}}';
    expect(JSON.parse(stringUserState).pokemon.name).to.equal(pokemonName);
    });
})

Cypress.Commands.add('checkSecretRetrieval', (secretName, location) => {
    cy.get('.menu__item').contains(location).click();
    cy.url().should('include', 'secrets/'+secretName);
    cy.focused().type('{enter}').then(() => {
    const stringUserState = localStorage.getItem('userState') || '{"pokemon": {"name": ""}}';
    expect(JSON.parse(stringUserState).secrets).to.include(secretName);
    });
})

