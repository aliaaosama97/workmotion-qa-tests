class TalentSearchViewPage {
  searchTalentByName(name) {
    cy.get('[data-testid="talent-search-input"]') // adjust selector
      .clear()
      .type(name);
    cy.get('[data-testid="talent-search-button"]').click(); // optional button click
  }

  verifyTalentInSearchResults(name) {
    cy.get('[data-testid="talents-list"]')
      .should('contain.text', name);
  }

  selectTalentFromSearchResults(name) {
    cy.get('[data-testid="talents-list"]')
      .contains(name)
      .click();
  }

  verifyTalentDetails(name) {
    cy.get('[data-testid="talent-details-name"]')
      .should('contain.text', name);

    // add additional checks for email, start date, etc.
    cy.get('[data-testid="talent-details-email"]').should('exist');
    cy.get('[data-testid="talent-details-start-date"]').should('exist');
  }
}

export default new TalentSearchViewPage();
