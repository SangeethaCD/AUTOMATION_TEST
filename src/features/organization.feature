Feature: Organization Creation and Management
  As a user,
  I want to create, modify, and manage my organization
  So that I can maintain accurate organizational information on skillsmax.ai

  Background:
    Given I am on the organization dashboard of skillsmax.ai
    When I click the "Create Organization" button
    Then I should see the organization creation sidetray with mandatory fields
  @organization
  Scenario: Successful organization creation
    When I fill in the organization creation form with:
      | Field            | Value         |
      | OrganizationName | Org_test      |
      | Address          |   123 Main St |
      | Country          | United States |
      | State            | California    |
      | Pincode          |         90001 |
      | City             | Los Angeles   |
      | AssessmentLevel  | Graded        |
    And I click the "Create" button
    Then I should see a confirmation toaster message

  @organization 
  Scenario: Validation of mandatory fields
    When I submit the organization creation form without filling mandatory fields
    Then I should see validation messages for:
      | Field            | Message                                     |
      | OrganizationName | Organisation Name is required               |
      | Address          | Address is required                         |
      | Country          | Country is required                         |
      | AssessmentLevel  | Please select at least one assessment level |
