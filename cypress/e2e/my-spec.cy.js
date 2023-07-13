import action from "../support/action.js";

describe('Test Contact App', () => {

  beforeEach(() => {
    cy.visit('./contact_app.html')
  })

  it('Test if the application loads correctly', () => {
    cy.get('h1.text-center').should('have.text', 'Contact List App');
    cy.get('table tbody tr').should('have.length', 1)
  })

  it('Test in the application we can see 3 input fields and also contain Add button', () => {
    action.verifyInputField();
  })

  it('Test in the application all input fields are in editable format', () => {
    action.verifyInputFiledEditable();
  })
  it('Test in the application are we able to fill the data oin each field', () => {
    action.enterDetail();
  })

  it('After successfull filling the data are we able to click on Add button and verify the data coming proper', () => {
    action.enterDetails();
  })

  it('when user click on edit then he can edit', () => {
    action.enterDetailsAndClickOnEdit()
  })

  // Add tests here
});