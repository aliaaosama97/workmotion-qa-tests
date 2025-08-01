// cypress/pages/loginPage.js

class LoginPage {
  visit() {
    cy.visit('https://beta.workmotion.com/');
  }

  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  assertErrorMessage() {
    cy.contains('Invalid').should('be.visible');
  }
}

export default new LoginPage();
