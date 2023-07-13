export default {
    verifyTableHeaders(){
        cy.get('table > tbody').find('th').contains('Name')
        cy.get('table > tbody').find('th').contains('Phone')
        cy.get('table > tbody').find('th').contains('Email')
        cy.get('table > tbody').find('th').contains('Actions')
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
        
          // Verified the existance of Add button
          cy.get('body').find('button').contains('Add');
    },
    verifyInputFiledEditable() {
        cy.get('body').find('input').then(input => {
            for(let i = 0 ; i< 3 ;i++){
              expect(input[i]).to.be.enabled;
            }
          })
    },
    enterDetails() {
        let name = 'John Doe', phone = '613-111-1111', email = 'johndoe@gmial.com' ;
        cy.get('#app').find('[placeholder="Name"]').click().type(name);
        cy.get('[placeholder="Phone"]').click().type(phone);
        cy.get('[placeholder="Email"]').click().type(email);
        cy.get('body').find('button').contains('Add').click();
        cy.get('table > tbody').find('tr').last().find('td').then( data => {
          expect(data[0].innerText).to.equals(name);
          expect(data[1].innerText).to.equals(phone);
          expect(data[2].innerText).to.equals(email);
          cy.get('[name="edit"]').should('exist');
          cy.get('[name="delete"]').should('exist');
        })    
    },
    editDetails() {
        this.enterDetails();
        cy.get('[name="edit"]').click();
        cy.wait(3000)
        cy.get('table > tbody').find('tr').last().find('td').eq(0).find('input').click().clear().type('Johnny Doe');
        cy.get('table > tbody').find('tr').last().find('td').eq(1).find('input').click().clear().type('613-211-1111');
        cy.get('table > tbody').find('tr').last().find('td').eq(2).find('input').click().clear().type('johnnydoe@gmial.com');
        cy.wait(3000)
        cy.get('[name="update"]').click()
    },
}