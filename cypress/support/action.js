export default {
    enterDetail() {
        cy.get('#app').find('[placeholder="Name"]').click().type('Radhe Krishna');
        cy.get('[placeholder="Phone"]').click().type('1203654789');
        cy.get('[placeholder="Email"]').click().type('RadheKrishna@gmial.com');
    },
    verifyInputFiledEditable() {
        cy.get('body').find('input').then(input => {
            for(let i = 0 ; i< 3 ;i++){
              expect(input[i]).to.be.enabled;
            }
          })
    },
    verifyInputField(){
        cy.get('body').find('input').then(input => {
            expect(input.length).to.equals(3);
          })
          cy.get('body').find('button').contains('Add');
    },
    enterDetails() {
        let name = 'Radhe Krishna', phone = '1203654789', email = 'RadheKrishna@gmial.com' ;
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
    enterDetailsAndClickOnEdit() {
        this.enterDetails();
        cy.wait(3000)
        cy.get('[name="edit"]').click();
        cy.get('table > tbody').find('tr').last().find('td').eq(0).find('input').click().clear().type('Seeta Ram');      
        cy.get('[name="update"]').click()
    }
}