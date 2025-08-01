const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const assert = require('assert');

Given('the user is on the Onboardings tab', function () {
  cy.visit('/onboardings');
  cy.get('[data-testid="onboardings-tab"]').should('be.visible').click();
});

When('the user clicks the {string} button', function (buttonLabel) {
  // Generic button click by label or test ID
  if (buttonLabel === 'Add Talent') {
    cy.get('[data-testid="AddIcon"]').parents('button').click();
  } else if (buttonLabel === 'Save') {
    cy.get('[data-testid="save-talent-button"]').click();
  }
});

When('fills in the talent details with valid data', function () {
  cy.get('[data-testid="talent-name"]').type('John Doe');
  cy.get('[data-testid="talent-email"]').type('john.doe@example.com');
  cy.get('[data-testid="talent-start-date"]').type('2025-08-01');
  // Add more fields as needed
});

Then('the new talent should appear in the talents list view', function () {
  cy.get('[data-testid="talents-list"]').should('contain.text', 'John Doe');
});
//////
Given('the user is on the {string} form', function (formName) {
  if (formName === 'Add Talent') {
    cy.visit('/onboardings');
    cy.get('[data-testid="AddIcon"]').parents('button').click();
  }
});

When('the user leaves the {string} field empty', function (fieldName) {
  if (fieldName === 'Email') {
    cy.get('[data-testid="talent-email"]').clear();
  } else if (fieldName === 'Start Date') {
    cy.get('[data-testid="talent-start-date"]').clear();
  }
});

Then('an error message {string} should be displayed', function (expectedMessage) {
  // Example based on field type
  cy.contains(expectedMessage).should('be.visible');
});
