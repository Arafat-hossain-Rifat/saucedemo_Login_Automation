class LoginPage {
  elements = {
    userNameField: () => cy.get('#user-name'),
    passwordField: () => cy.get('#password'),
    logInButton: () => cy.get('#login-button'),
    errorField: () => cy.get('h3[data-test="error"]'),
  };

  data = {
    userName: "standard_user",
    wrongUserName: "wrong_user",
    password: "secret_sauce",
    wrongPassword: "Wrong@123", 
    errorMsgInvldCrdntl: "Epic sadface: Username and password do not match any user in this service",
    errorMsgUserID: "Epic sadface: Username is required",
    errorMsgPassword: "Epic sadface: Password is required",
  };

  visit() {
    cy.visit(
      "https://www.saucedemo.com/"
    );
  }

  submitWithValues() {
    this.visit()
    this.elements.userNameField().type(this.data.userName)
    this.elements.passwordField().type(this.data.password)
    this.elements.logInButton().click()
  }

}

module.exports = new LoginPage();