import LoginPage from '../pages/loginPage'
const loginPage = new LoginPage();

const url = "http://automationpractice.com/index.php?controller=authentication&back=my-account";

const information = [
    { email: "Aleksandra", checkEmail: false },
    { email: "Aleksandra1235@test.pl", checkEmail: true },
]

describe('Login page - check email for registration', () => {

    beforeEach(() => {
        loginPage.openWebsite(url)
    })

    context('On the login website exist...', () => {
        it('create account formular', () => {
            cy
                .get('#create-account_form > .page-subheading')
                .should('be.visible')
                .should('contain', 'Create an account')
        })
    })

    context('Checking email adress', () => {
        information.map(item => {
            it('Input email value', () => {
                loginPage.typeEmailRegistration(item.email)
                loginPage.checkEmail(item.checkEmail)
            })
        })
    })
})

const registration = [
    { email: "Aleksandra1234@test.pl", gender: "woman", firstName: "Aleksandra", lastName: "Kozikowska", pass: "12345", date: "22", month: "June", year: "1994", newsletter: "yes", specialOffer: "yes", company: "xyz", adrres: "Krakowska 10", city: "Gliwice", state: "Idaho", postCode: "00000", phoneNumber: "123654789" }
]

describe('Registration', () => {
    registration.map(item => {
        context('Open registration formular', () => {

            it('Open website', () => {
                loginPage.openWebsite(url)
            })
            it('Input correct email', () => {
                loginPage.typeEmailRegistration(item.email)
            })
        })
        context('Registration forumlar input information...', () => {

            it("gender choice", () => {
                loginPage.genderChoice(item.gender)
            })

            it("first name", () => {
                loginPage.inputFirstName(item.firstName)
            })

            it("last name", () => {
                loginPage.inputLastName(item.lastName)
            })

            it("password", () => {
                loginPage.inputPassword(item.pass)
            })

            it("date of birth", () => {
                loginPage.selectDateOfBirth(item.date)
                loginPage.selectMonthOfBirth(item.month)
                loginPage.selectYearOfBirth(item.year)
            })

            it("permision for newsletter", () => {
                loginPage.inputPermisionForNewsletter(item.newsletter)
            })

            it("permision for special offer", () => {
                loginPage.inputPermisionForSpecialOffer(item.specialOffer)
            })
            it("name of company", () => {
                loginPage.inputNameCompany(item.company)
            })

            it("adress", () => {
                loginPage.inputAdress(item.adrres)
            })

            it("city", () => {
                loginPage.inputCity(item.city)
            })

            it("state", () => {
                loginPage.selectState(item.state)
            })

            it("postcode", () => {
                loginPage.inputPostCode(item.postCode)
            })

            it("phone", () => {
                loginPage.inputPhoneNumber(item.phoneNumber)
            })

            it("confirm registration", () => {
                loginPage.confirmRegistration()
            })
        })
    })
})


information.map(item => {
    // describe('Checking log in', () => {
    //     it('Check login', () => {
    //     firstTestPage.typeEmail('Aleksandra@test.pl')
    //     firstTestPage.typePassword('12345')
    //     cy.get('#SubmitLogin > span').click()
    // })
    // })
})
