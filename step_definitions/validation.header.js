const {defineSupportCode} = require('cucumber');
const expect = require('chai').expect;
const world = require('../pages/world');

defineSupportCode(function({Given, Then, When}) {
    Given(/^I am on Home page$/, ()=>{
        return world.homePage.openPage();
    });

    When(/^I click link "(.*)"$/, ()=>{
        return world.homePage.header.about.click();
    });

    Then(/^I am on page with title "(.*)"$/, (expectedTitle)=>{
        return browser.getTitle().then((currentTitle)=>{
            return expect(currentTitle).to.equal(expectedTitle);
        });
    });
});