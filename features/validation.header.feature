@smoke
Feature: Header
  As user I want be able to click buttons in header and after I redirect to other pages

  Scenario: Validation details
    Given I am on Home page
    When I click link "About"
    Then I am on page with title "About ProtonMail"
