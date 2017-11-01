@smoke
Feature: Header
  As user I want be able to click buttons in header and after I redirect to other pages

  Scenario Outline: Validation link menu
    Given I am on Home page
    Then Page title should be "Secure email: ProtonMail is free encrypted email."
    When I click link '<link>'
    Then I am on page with title '<title>'

  Examples:
  |link      |title|
  |about     |About ProtonMail|
  |security  |ProtonMail - Security Features|
  |blog      |ProtonMail Blog - Secure email news|
  |careers   |ProtonMail - Careers|
  |support   |ProtonMail Support - Knowledge Base and Tutorials|
  |logIn     |Login \| ProtonMail|
  |signUp    |ProtonMail - Sign Up|




