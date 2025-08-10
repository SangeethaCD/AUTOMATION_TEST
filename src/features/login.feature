Feature: User Login

  Background:
    Given the user is on the skillsmax login page

  Scenario: Successful login with valid credentials
    When the user enters a valid username and password
    And clicks the login button
    Then the user should be redirected to the Organization dashboard

  Scenario: Login with invalid password
    When the user enters a valid username and an incorrect password
    And clicks the login button
    Then an error message should be displayed
    And the user should remain on the login page

  Scenario: Login attempt with missing fields
    When the user clicks the login button without entering credentials
    And clicks the login button
    Then validation messages should appear for the required fields
    And the user should remain on the login page
