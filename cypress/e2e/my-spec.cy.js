import action from "../support/action.js";

describe('Test Contact App', () => {

  beforeEach(() => {
    cy.visit('./contact_app.html')
  })

  it('Test if the application loads correctly', () => {
    cy.get('h1.text-center').should('have.text', 'Contact List App');
    cy.get('table tbody tr').should('have.length', 1)
  })
  
  it('Verify Table headers', () => {
    action.verifyTableHeaders();
  })
  
  it('Veiry input fields and button(s)', () => {
    action.verifyPageElements();
  })

  it('Test in the application all input fields are in editable format', () => {
    action.verifyInputFiledEditable();
  })

  it('After successfull filling the data are we able to click on Add button and verify the data coming proper', () => {
    action.addData();
  })

  it('when user click on edit then he can edit', () => {
    action.editData();
  })

  // Add tests here
});