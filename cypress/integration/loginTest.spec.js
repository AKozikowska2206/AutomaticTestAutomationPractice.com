import LoginPage from '../pages/loginPage'
const loginPage = new LoginPage();

const url = "http://automationpractice.com/index.php?controller=authentication&back=my-account";

const information = [
    { email: "Aleksandra", checkEmail: false, pass: "123" },
    { email: "Aleksandra123@test.pl", checkEmail: true, pass: "1234" },
]

describe('Login page - check email for registration', () => {

    // beforeEach(() => {
    //    loginPage.openWebsite()
    // })

    // // DOKONCZYC KONTEKST - PROBLEM Z FUNKCJA CONTAIN (test obiektow ktore maja znalezc sie na stronie)
    // context('On the login website exist...', () => {
    //     it('create account formular', () => {
    //         cy
    //         .get('#create-account_form > .page-subheading')
    //         .should('be.visible')
    //         // .should('contain','CREATE AN ACCOUNT')
    //     })
    // })

    // // GOTOWY CONTEXT - PROBLEM W KLASIE FUNKCJA CONTAIN JAK POWYZEJ
    // context('Checking email adress', () => {
    //     information.map(item => {
    //         it('Input email value', () => {
    //             // cy.log(item.email);
    //             loginPage.typeEmailRegistration(item.email)
    //             loginPage.checkEmail(item.checkEmail)
    //         })
    //     })
    // })
})

describe('Registration', () => {
    // information.map(item => {
        //STWORZYC MAPE DLA DWOCH KONETKSTOW
        //CONTEXT SKONCZONY

        context('Open registration formular', () => {

            it('Open website', () => {
                loginPage.openWebsite()
            })
            it('Input correct email', () => {
                loginPage.typeEmailRegistration('ola987@test.pl')
            })
        })

        context('Registration forumlar input information...', () => {

            it("gender choice", () => {
                loginPage.genderChoice('man')
            })

            it("first name", () => {

            })

            it("last name", () => {

            })

            it("password", () => {

            })

            it("date of birth", () => {

            })

            it("permision for newsletter", () => {

            })

            it("permision for special offer", () => {

            })
            it("name of company", () => {

            })

            it("adress", () => {

            })

            it("city", () => {

            })

            it("state", () => {

            })

            it("postcode", () => {

            })
            it("phone", () => {

            })
            it("confirm registration", () => {

            })
        })
    })
// })

information.map(item => {
    // describe('Checking log in', () => {
    //     it('Check login', () => {
    //     firstTestPage.typeEmail('Aleksandra@test.pl')
    //     firstTestPage.typePassword('12345')
    //     cy.get('#SubmitLogin > span').click()
    // })
    // })
})
