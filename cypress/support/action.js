export default {

    verifyTableHeaders(){
        cy.get('table > tbody').find('th').contains('Name')
        cy.get('table > tbody').find('th').contains('Phone')
        cy.get('table > tbody').find('th').contains('Email')
        cy.get('table > tbody').find('th').contains('Actions')
    },

    clickButton(btn) {
      return cy.get('body').find('button').contains(btn);
    },

    verifyPageElements(){
        cy.get('body').find('input').then(input => {
            //Verifies the number of input fields
            expect(input.length).to.equals(3);                

            //Verifies the identity of the fields

            cy.get('#app').find('[placeholder="Name"]');
            cy.get('[placeholder="Phone"]');
            cy.get('[placeholder="Email"]');
          })

          // Verifies the existance of Add button
          this.clickButton('Add')
    },

    verifyInputFiledEditable() {
        cy.get('body').find('input').then(input => {
            for(let i = 0 ; i< 3 ;i++){
              expect(input[i]).to.be.enabled;
            }
          })
    },

    verifyAllDetails(name, phone, email) {
      cy.get('table > tbody').find('tr').last().find('td').then( data => {
        expect(data[0].innerText).to.equals(name);
        expect(data[1].innerText).to.equals(phone);
        expect(data[2].innerText).to.equals(email);
        cy.get('[name="edit"]').should('exist');
        cy.get('[name="delete"]').should('exist');
      })    
    },

    addData() {
        let name = 'John Doe', phone = '613-111-1111', email = 'johndoe@gmial.com' ;
        cy.get('#app').find('[placeholder="Name"]').click().type(name);
        cy.get('[placeholder="Phone"]').click().type(phone);
        cy.get('[placeholder="Email"]').click().type(email);
        this.clickButton('Add').click()
        this.verifyAllDetails(name, phone, email);  
    },

    editData() {
      let name = 'Johnny Doe', phone = '613-211-1111', email = 'johnnydoe@gmial.com' ;
        this.addData();
        cy.get('[name="edit"]').click();
        cy.wait(3000)
        cy.get('table > tbody').find('tr').last().find('td').eq(0).find('input').click().clear().type(name);
        cy.get('table > tbody').find('tr').last().find('td').eq(1).find('input').click().clear().type(phone);
        cy.get('table > tbody').find('tr').last().find('td').eq(2).find('input').click().clear().type(email);
        cy.get('[name="update"]').click()
        this.verifyAllDetails(name, phone, email);
    },

    clickOnDelete() {
      cy.get('[name="delete"]').click();
    },

    verifyNoDataInTable() {
      cy.get('table > tbody').find('tr').then(tbody => {
        expect(tbody.length).to.equals(1);
      })
    }
}