import TalentSearchViewPage from '../WorkMotion_Platform/features/stepDefenitions/talentSearchViewPage';

const page = new TalentSearchViewPage();
const talentName = {
  name: 'Jane Cypress',
  email: 'jane.cypress@example.com',
  country: 'Germany'
  }; 

describe('Talent search and view functionality', () => {

  beforeEach(() => {
    //Set desktop viewport
    cy.viewport(1920, 1080)
    // Login before every test
    loginPage.visit();
    loginPage.fillEmail(validEmail);
    loginPage.fillPassword(validPassword);
    loginPage.submit();
    cy.wait(2000); // Wait for redirect after login
  });

  it('should find the newly added talent in search results', () => {
    page.searchTalentByName(talentName.name);
    page.verifyTalentInSearchResults(talentName);
  });

  it("should display newly added talent's information correctly", () => {
    page.searchTalentByName(talentName);
    page.selectTalentFromSearchResults(talentName);
    page.verifyTalentDetails(talentName);
  });

});
