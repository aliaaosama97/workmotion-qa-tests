import loginPage from '../WorkMotion_Platform/features/stepDefenitions/loginPage';
import onboardingPage from '../WorkMotion_Platform/features/stepDefenitions/onboardingPage' ;

describe('Talent Onboarding Tests', () => {
  const validEmail = 'avengers.engineering+hr1@workmotion.com';
  const validPassword = 'DummyPass.12';

  const newTalent = {
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

  it('should add a new talent and find them in the list', () => {
    onboardingPage.openOnboardingTab();
    onboardingPage.clickAddTalent();
    onboardingPage.fillTalentForm(newTalent);
    onboardingPage.submitTalent();

    // Search for the added talent
    onboardingPage.searchTalent(newTalent.name);
    onboardingPage.assertTalentInList(newTalent.name);
  });
});
