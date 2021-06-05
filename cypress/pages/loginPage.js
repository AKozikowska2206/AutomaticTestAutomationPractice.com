class LoginPage {

    typeEmailRegistration(email) {
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate > span').click()
    }

    checkEmail(emailValue = true) {
        if (emailValue) {
            cy
                .wait(10000)
                .get('.page-heading')
                .should('be.visible')
            // .should('have.text','CREATE AN ACCOUNT')
            // cy.log(emailValue);
        }
        else {
            cy
                .wait(5000)
                .get('#create_account_error')
                .should('be.visible')
            cy
                .get('ol > li')
                .should('contain', 'Invalid email address.')
        }
    }

    openWebsite(){
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    }
}

export default LoginPage