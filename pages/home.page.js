/**
 * Created by Siarhei_Rylach on 10/31/2017.
 */

const Header = require('./support/header');
const Footer = require('./support/footer');

class MainPage {
    constructor() {
        this.url = "https://protonmail.com/";
        this.header = new Header();
        this.footer = new Footer();
    };

    openPage(){
        return browser.get(this.url);
    }

}

module.exports = MainPage;