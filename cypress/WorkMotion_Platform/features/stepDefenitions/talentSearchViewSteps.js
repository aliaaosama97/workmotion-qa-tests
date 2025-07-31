const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const TalentSearchViewPage = require('./talentSearchViewPage');

const page = new TalentSearchViewPage();
const talentName = 'John Doe'; // you can make this dynamic with Scenario Outline if needed

Given('the user is on the Onboardings tab', () => {
  cy.visit('/onboardings');
  cy.get('[data-testid="onboardings-tab"]').click();
});

When('the user searches for the newly added talent by name', () => {
  page.searchTalentByName(talentName);
});

Then('the talent should appear in the search results', () => {
  page.verifyTalentInSearchResults(talentName);
});

When('selects the talent from the search results', () => {
  page.selectTalentFromSearchResults(talentName);
});

Then('the talent\'s information should be displayed correctly', () => {
  page.verifyTalentDetails(talentName);
});
