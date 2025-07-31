import loginPage from '../WorkMotion_Platform/features/stepDefenitions/loginPage';
import onboardingPage from '../WorkMotion_Platform/features/stepDefenitions/onboardingPage' ;

describe('Talent Onboarding Tests', () => {
  const validEmail = 'avengers.engineering+hr1@workmotion.com';
  const validPassword = 'DummyPass.12';

  const newTalent = {
    FirstName: 'Jane',
    LastName: 'Cypress',
    DateOfBirth: '13/01/1997',
    AddressLine1: 'building 10',
    AddressLine2: 'starsse 15',
    CityOrState: 'Koln',
    PostalCode: '12556',
    JobTitle: 'UI/UX',
    qualification: 'Senior',
    JobDescription: 'responsible for project managing',
    JobDescriptioninGerman: 'responsible for project managing',
    email: 'jane.cypress@example.com',
    country: 'Germany',
    startDate: '20/08/2025',
    endDate: '01/10/2026',
    equipment: 'laptop'
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
    onboardingPage.fillTalentForm(newTalent);
    onboardingPage.submitTalent();

    // Search for the added talent
    onboardingPage.searchTalent(newTalent.name);
    onboardingPage.assertTalentInList(newTalent.name);
  });
});
