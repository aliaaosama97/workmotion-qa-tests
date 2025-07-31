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

  fillTalentForm({ FirstName, LasttName,DateOfBirth,AddressLine1,
    AddressLine2,CityOrState,PostalCode , email, country, startDate }) {
    cy.get('[data-cy="steps-candidate-first-name-input"]').type(FirstName);
    cy.get('[data-cy="steps-candidate-last-name-input"]').type(LasttName);
    cy.get('#2119d6af-29d8-3f3e-80dd-77252832b4cc').then(($input) => {
      cy.wrap($input)
        .invoke('val', DateOfBirth)
        .trigger('change');
    });
    cy.get('[data-cy="steps-talent-is-local-yes-radio"]').click();
    cy.get('[data-cy="steps-talent-is-senior-no-radio"]').click();

    //click on the radio button to add the talant addres
    cy.get('[data-cy="steps-address-selector-hr-yes-radio"]').click().then(() =>{
      cy.get('[data-cy="steps-address-line-one-hr-input"]')
      .should('be.visible')
      .type(AddressLine1);

      cy.get('[data-cy="steps-address-line-two-hr-input"]')
      .should('be.visible')
      .type(AddressLine2);

      cy.get('[data-cy="steps-city-state-hr-input"]')
      .should('be.visible')
      .type(CityOrState);

      cy.get('[data-cy="steps-postal-code-hr-input"]')
      .should('be.visible')
      .type(PostalCode);
    });

    //work from home 
    cy.get('[data-cy="steps-work-from-home-selector-yes-radio"]').click();
    //will they travel
    cy.get('[data-cy="steps-travel-work-selector-no-radio"]').click();
    // vist site 
    cy.get('[data-cy="steps-construction-work-selector-no-radio"]').click();

    //click Continue
    cy.get('[data-cy="steps-continue-btn"]').click();
    


    /*cy.get('input[name="email"]').type(email);
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