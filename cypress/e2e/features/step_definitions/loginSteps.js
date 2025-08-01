const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const assert = require('assert');

Given('the user navigates to the workmotion {string}', function (webSiteLink) {
  cy.visit(webSiteLink);
});

Given('the user is on the login page', function () {
  cy.xpath('//*[@id="main-container"]/div/div/main/div/div/form/div[1]/div[1]/div[2]/div', { timeout: 10000 })
  .should('be.visible')
    .then(() => {
      console.log('User navigated to the login page.');
    });
});

When('the user enters username {string} and password {string}', function (username, password) {
  cy.xpath('//*[@id="main-container"]/div/div/main/div/div/form/div[1]/div[1]/div[2]/div')
    .type(username);

  cy.xpath('//*[@id="main-container"]/div/div/main/div/div/form/div[1]/div[3]/div[2]/div')
    .type(password);
});

When('the user enters an invalid username {string} or password {string}', function (username, password) {
  cy.xpath('//*[@id="main-container"]/div/div/main/div/div/form/div[1]/div[1]/div[2]/div')
    .type(username);

  cy.xpath('//*[@id="main-container"]/div/div/main/div/div/form/div[1]/div[3]/div[2]/div')
    .type(password);
});

When('clicks the login button', function () {
    cy.xpath('//*[@id="main-container"]/div/div/main/div/div/form/div[2]/button')
    .click();
  console.log('User clicked the login button.');
});

Then('the user should be redirected to the dashboard', function () {
  cy.xpath('//*[@id="main-container"]/div/div[3]/div[3]/div/div[1]/div[1]', { timeout: 10000 })
  .should('be.visible')
    .then(() => {
      console.log('Dashboard element is visible.');
    });
});

Then('an error message {string} should be displayed', function (expectedErrorMessage) {
  cy.xpath('//*[@id="main-container"]/div/div/main/div/div/form/div[1]/p')
    .invoke('text')
    .then((actualErrorMessage) => {
      assert.strictEqual(
        actualErrorMessage.trim(),
        expectedErrorMessage,
        `Expected error message to be "${expectedErrorMessage}", but got "${actualErrorMessage}"`
      );
    });
  console.log(`Error message "${expectedErrorMessage}" displayed.`);
});