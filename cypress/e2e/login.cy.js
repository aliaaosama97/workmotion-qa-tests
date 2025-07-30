// cypress/e2e/login.cy.js

import loginPage from '../pages/loginPage';

describe('Login Tests - WorkMotion', () => {
  const validEmail = 'avengers.engineering+hr1@workmotion.com';
  const validPassword = 'DummyPass.12';
  const invalidPassword = 'WrongPassword123';

  it('should login successfully with valid credentials', () => {
    loginPage.visit();
    loginPage.fillEmail(validEmail);
    loginPage.fillPassword(validPassword);
    loginPage.submit();

    cy.wait(3000); // You can later replace this with a real assertion
  });

  it('should show error on invalid login', () => {
    loginPage.visit();
    loginPage.fillEmail(validEmail);
    loginPage.fillPassword(invalidPassword);
    loginPage.submit();

    loginPage.assertErrorMessage();
  });
});
