const {defineSupportCode} = require('cucumber');
const expect = require('chai').expect;
const world = require('../pages/world');

defineSupportCode(function({Given, Then, When, setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000); // ?

    Given(/^I am on Home page$/, ()=>{
        return world.homePage.openPage();
    });

    Then(/^Page title should be "(.*)"$/, (title) => {
        return browser.getTitle().then((text)=>{
            return expect(text).to.equal(title);
        });
    });

    When(/^I click link '(.*)'$/, (link)=>{
        return world.homePage.header[link].click();
    });

    Then(/^I am on page with title '(.*)'$/, (expectedTitle)=>{
        return browser.getTitle().then((currentTitle)=>{
            return expect(currentTitle).to.equal(expectedTitle);
        });
    });
});