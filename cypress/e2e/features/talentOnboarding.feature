Feature: Talent onboarding functionality

  Scenario: Add a new talent with valid data
    Given the user is on the Onboardings tab
    When the user clicks the "Add Talent" button
    And fills in the talent details with valid data
    And clicks the "Save" button
    Then the new talent should appear in the talents list view

  Scenario: Required field validations during talent onboarding
    Given the user is on the "Add Talent" form
    When the user leaves the "Email" field empty
    And clicks the "Save" button
    Then an error message "Email is required" should be displayed

    When the user leaves the "Start Date" field empty
    And clicks the "Save" button
    Then an error message "Start Date is required" should be displayed