class LoginPage {

    typeEmailRegistration(email) {
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate > span').click()
    }

    checkEmail(emailValue = true) {
        if (emailValue) {
            cy
                .get('.page-heading')
                .should('be.visible')
                .should('have.text', 'Create an account')
        }
        else {
            cy
                .get('#create_account_error')
                .should('be.visible')
            cy
                .get('ol > li')
                .should('contain', 'Invalid email address.')
        }
    }

    openWebsite(website) {
        cy.visit(website)
    }

    genderChoice(gender) {
        if (gender == 'man') {
            cy.get('#id_gender1').click()
        }
        else if (gender == 'woman') {
            cy.get('#id_gender2').click()
        }
        else {
            cy.log('Gender not selected')
        }
    }
    inputFirstName(firstName) {
        cy
            .get('#customer_firstname')
            .type(firstName)
    }

    inputLastName(lastName) {
        cy
            .get('#customer_lastname')
            .type(lastName)
    }

    inputPassword(password) {
        cy
            .get('#passwd')
            .type(password)
    }

    selectDateOfBirth(date) {
        cy
            .get('#days')
            .select(date)
    }

    selectMonthOfBirth(month) {
        cy
            .get('#months')
            .select(month)
    }

    selectYearOfBirth(year) {
        cy
            .get('#years')
            .select(year)
    }

    inputPermisionForNewsletter(newsletter) {
        if (newsletter == 'yes') {
            cy.get('#newsletter').click()
        }
        else {
            cy.log('no permission')
        }
    }

    inputPermisionForSpecialOffer(specialOffer) {
        if (specialOffer == 'yes') {
            cy.get('#optin').click()
        }
        else {
            cy.log('no permission')
        }
    }

    inputNameCompany(company) {
        cy
            .get('#company')
            .type(company)
    }

    inputAdress(address) {
        cy
            .get('#address1')
            .type(address)
    }

    inputCity(city) {
        cy
            .get('#city')
            .type(city)
    }

    selectState(state) {
        cy
            .get('#id_state')
            .select(state)
    }

    inputPostCode(post) {
        cy
            .get('#postcode')
            .type(post)
    }

    inputPhoneNumber(number) {
        cy
            .get('#phone_mobile')
            .type(number)
    }

    confirmRegistration() {
        cy
            .get('#submitAccount > span')
            .click()
    }
}

export default LoginPage