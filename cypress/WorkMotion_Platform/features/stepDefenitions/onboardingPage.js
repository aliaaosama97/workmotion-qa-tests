import { timeout } from "puppeteer-core";

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

  fillTalentForm({ FirstName, LastName,DateOfBirth,AddressLine1,AddressLine2,CityOrState,PostalCode , JobTitle, qualification, JobDescription,JobDescriptioninGerman,email, country, startDate, endDate,equipment }) {
    cy.get('[data-cy="steps-candidate-first-name-input"]', { timeout: 10000 }).should('exist').should('be.visible').type(FirstName);

    cy.get('[data-cy="steps-candidate-last-name-input"]').type(LastName);

    cy.get('#2119d6af-29d8-3f3e-80dd-77252832b4cc')
    .clear()
    .type(DateOfBirth)
    .should('have.value', DateOfBirth);

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

    //job title, qualification, JobDescription
    cy.get('[data-cy="steps-job-title-input"]', { timeout: 10000 }).should('exist').should('be.visible').type(JobTitle);

    cy.get('[data-cy="steps-job-title-qualification-textarea"]').type(qualification);

    cy.get('[data-cy="steps-job-description-textarea"]').type(JobDescription);

    cy.get('[data-cy="steps-job-description-local-language-textarea"]').type(JobDescriptioninGerman);

    //Employment type
    cy.get('[data-cy="steps-employment-type-full-time-radio"]').click();

    //contract type
    cy.get('[data-cy="steps-contract-type-fixed-term-radio"]').click();

    //start date
    cy.get('#0cf8b065-5ee8-3a80-aa36-01afa757637d')
    .clear()
    .type(startDate)
    .should('have.value', startDate);
   
    //end date
    cy.get('#d1e7a68e-3f67-3864-8f31-3129aae3295a')
    .clear()
    .type(endDate)
    .should('have.value', endDate);

    //Name of signatory
     cy.get('[data-cy="steps-signatory-full-name-input"]').type(`${FirstName} ${LastName}`);

     //titel signatory
     cy.get('[data-cy="steps-signatory-title-input"]').type(JobTitle);

     //email 
     cy.get('[data-cy="steps-signatory-email-input"]').type(email);

     //laptop 
     cy.get('[data-cy="steps-telework-equipment-input"]').type(equipment);
    //click continue
    cy.get('[data-cy="steps-continue-btn"]').click();


    //Contract Clauses
    cy.get('[data-cy="steps-previously-employed-selector-no-radio"]', { timeout: 10000 }).should('exist').should('be.visible').click();

    cy.get('[data-cy="steps-probation-period-selector-no-radio"]').should('exist').should('be.visible').click();

    cy.get('[data-cy="steps-no-probation-risks-selector-yes-radio"]').should('exist').should('be.visible').click();
    //click continue
    cy.get('[data-cy="steps-continue-btn"]').click();
    
    //Compensation Calculation
     cy.get('[data-cy="steps-benefit-private-health-insurance-selector-no-radio"]', { timeout: 10000 }).should('exist').should('be.visible').click();

     cy.get('[data-cy="steps-esop-provided-no-radio"]').click();
    //salary,bonus
     cy.get('[data-cy="steps-salary-gross-salary-localCurrencyInput"]').type('5000');

     cy.get('[data-cy="steps-annual-bonus-selector-no-radio"]').click();
     cy.get('[data-cy="steps-variable-bonus-selector-no-radio"]').click();
     //click continue
    cy.get('[data-cy="steps-continue-btn"]').click();


    //invite your employee
    cy.get('[data-cy="steps-candidate-email-input"]', { timeout: 10000 }).should('exist').should('be.visible').type(email);

    //Onboarding Checklist
    cy.get('label[for="2348ef59-57a2-3340-9a5f-8e64b5811e4d"]').should('exist')
    .should('be.visible')
    .click();

    cy.get('label[for="fad4da39-a628-35e2-9109-a93a1a855448"]').should('exist')
    .should('be.visible')
    .click();

    cy.get('label[for="f23111b4-e776-3977-8739-9d93633c2b07"]').should('exist')
    .should('be.visible')
    .click();
  }

  submitTalent() {
   /* cy.get('label[for="f1a0a19f-8536-3987-a403-5f3fda8169fd"]',  { timeout: 10000 }).should('exist').should('be.visible').click();
    cy.get('[data-cy="steps-finish-btn"]',  { timeout: 10000 }).should('exist').should('be.visible').click();*/
  }

  searchTalent(name) {
    //cy.get('input[placeholder="Search"]').type(name);
  }

  assertTalentInList(name) {
    //cy.contains(name).should('be.visible');
  }
}

export default new OnboardingPage();