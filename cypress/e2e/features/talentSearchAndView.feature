Feature: Talent search and view functionality

  Scenario: Search for a newly added talent
    Given the user is on the Onboardings tab
    When the user searches for the newly added talent by name
    Then the talent should appear in the search results

  Scenario: Verify newly added talent information
    Given the user is on the Onboardings tab
    When the user searches for the newly added talent by name
    And selects the talent from the search results
    Then the talent's information should be displayed correctly