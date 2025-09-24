import LoginPage from "../Pages/LoginPage";

describe('Login Test Suite', () => {

    beforeEach(() => {
        LoginPage.visit()
    });

    it('TC_LOGIN_01 - Login with a valid Username and a valid password', () => {
        LoginPage.submitWithValues()
        cy.url().should('include', '/inventory.html')
    });

    it('TC_LOGIN_03 - Login with a valid Username and an invalid password.', () => {
        LoginPage.elements.userNameField().type(LoginPage.data.userName)
        LoginPage.elements.passwordField().type(LoginPage.data.wrongPassword)
        LoginPage.elements.logInButton().click()
        LoginPage.elements.errorField().should('contain', LoginPage.data.errorMsgInvldCrdntl)
    });

    it('TC_LOGIN_03 - Login with an invalid Username and a valid password.', () => {
        LoginPage.elements.userNameField().type(LoginPage.data.wrongUserName)
        LoginPage.elements.passwordField().type(LoginPage.data.password)
        LoginPage.elements.logInButton().click()
        LoginPage.elements.errorField().should('contain', LoginPage.data.errorMsgInvldCrdntl)
    });

    it('TC_LOGIN_04 - Login with both Username and password is invalid', () => {
        LoginPage.elements.userNameField().type(LoginPage.data.wrongUserName)
        LoginPage.elements.passwordField().type(LoginPage.data.wrongPassword)
        LoginPage.elements.logInButton().click()
        LoginPage.elements.errorField().should('contain', LoginPage.data.errorMsgInvldCrdntl)
    });

    it('TC_LOGIN_05 - Attempt login with empty Username field', () => {
        LoginPage.elements.passwordField().type(LoginPage.data.password)
        LoginPage.elements.logInButton().click()
        LoginPage.elements.errorField().should('contain', LoginPage.data.errorMsgUserID)
    });

    it('TC_LOGIN_06 - Attempt login with empty password field', () => {
        LoginPage.elements.userNameField().type(LoginPage.data.wrongUserName)
        LoginPage.elements.logInButton().click()
        LoginPage.elements.errorField().should('contain', LoginPage.data.errorMsgPassword)
    });

    it('TC_LOGIN_07 - Attempt login with both fields empty', () => {
        LoginPage.elements.logInButton().click()
        LoginPage.elements.errorField().should('contain', LoginPage.data.errorMsgUserID)
            
    });

    it('TC_LOGIN_08 - Check the password field is masked', () => {
        LoginPage.elements.passwordField().type(LoginPage.data.password)
        LoginPage.elements.passwordField().should('have.attr', 'type', 'password');
    });

    it('TC_LOGIN_09: Login using Enter key', () => {
        LoginPage.visit();
        LoginPage.elements.userNameField().type(LoginPage.data.userName)
        LoginPage.elements.passwordField().type(`${LoginPage.data.password}{enter}`)
        cy.url().should('include', '/inventory.html');
    });

    it('TC_LOGIN_10: Session timeout after login', () => {
        LoginPage.submitWithValues();
        cy.url().should('include', '/inventory.html');
        cy.clearCookies();
        cy.clearLocalStorage();
        LoginPage.visit()
        cy.url().should('not.include', '/inventory.html');
    });
});