Feature: User creation

  @User
  Scenario: Creating users through the user creation side tray
    Given the user is on the user creation page
    When the user clicks the "User Creation" button
    Then the user should see the user creation side tray
    When the user clicks the "Bulk User Creation" button
    And the user clicks the "Next" button
    Then the user should be prompted to upload the user creation files
    When the user clicks the "Nexts" button
    And the user clicks the "Confirm and Create" button
