import TalentSearchViewPage from '../WorkMotion_Platform/features/stepDefenitions/talentSearchViewPage';
import loginPage from '../WorkMotion_Platform/features/stepDefenitions/loginPage';


 

describe('Talent search and view functionality', () => {
  const validEmail = 'avengers.engineering+hr1@workmotion.com';
  const validPassword = 'DummyPass.12';

  const talentName = {
  name: 'Jane Cypress',
    email: 'jane.cypress@example.com',
    country: 'Germany',
    startDate: '2025-08-01'
  };

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
    page.verifyTalentInSearchResults(talentName.name);
  });

  it("should display newly added talent's information correctly", () => {
    page.searchTalentByName(talentName.name);
    page.selectTalentFromSearchResults(talentName.name);
    page.verifyTalentDetails(talentName.name);
  });

});
