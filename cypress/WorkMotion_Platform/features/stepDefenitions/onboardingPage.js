class OnboardingPage {
  openOnboardingTab() {
    // Click on "Hire Now" button
    cy.get('[data-testid="add-employee-menu"]').should('be.visible').click();
    cy.get('[data-testid="create-new-item"]').should('be.visible').click();
    
    // Click on Talent option
    cy.get('[data-testid="onboarding-hire-option-talent"]').should('be.visible').click();

    // type the country then press enter
    cy.get('.css-1wopavw-control').click().type('Germany{enter}');

    // Wait for the "Get started" button to be visible and click it
    cy.get('[data-cy="country-selection-get-started-btn"]')
      .should('be.visible')
      .click();
    // Select the type of contract 
    cy.get('[data-testid="onboarding-product-workglobal"]').click().then((interception) =>{
      cy.get('[data-cy="product-selection-begin-onboarding-btn"]')
      .should('be.visible')
      .click();
    })
  }

  clickAddTalent() {
    //cy.contains('Add talent').click();
  }

  fillTalentForm({ name, email, country, startDate }) {
    /*cy.get('input[name="name"]').type(name);
    cy.get('input[name="email"]').type(email);
    cy.get('select[name="country"]').select(country);
    cy.get('input[name="start_date"]').type(startDate);*/
  }

  submitTalent() {
    //cy.get('button[type="submit"]').click();
  }

  searchTalent(name) {
    //cy.get('input[placeholder="Search"]').type(name);
  }

  assertTalentInList(name) {
    //cy.contains(name).should('be.visible');
  }
}

export default new OnboardingPage();