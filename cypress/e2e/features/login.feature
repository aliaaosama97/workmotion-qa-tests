Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given the user navigates to the workmotion "https://beta.workmotion.com"
    Given the user is on the login page
    When the user enters username "avengers.engineering+hr1@workmotion.com" and password "DummyPass.12"
    And clicks the login button
    Then the user should be redirected to the dashboard

  Scenario Outline: Login failure with incorrect credentials
    Given the user navigates to the workmotion "https://beta.workmotion.com"
    Given the user is on the login page
    And the login page is displayed
    When the user enters an invalid username "<username>" or password "<password>"
    And clicks the login button
    Then an error message "<errorMesssage>" should be displayed

    Examples:
      | username                                | password      | errorMesssage                                          |
      | wronguser                               | DummyPass.12  | The email and / or the password you entered is invalid |
      | avengers.engineering+hr1@workmotion.com | wrongpassword | The email and / or the password you entered is invalid |
