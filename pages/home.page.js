/**
 * Created by Siarhei_Rylach on 10/31/2017.
 */

const Header = require('./support/header');

class MainPage {
    constructor() {
        this.url = "https://protonmail.com/";
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.header = new Header();
    };

}

module.exports = MainPage;