/**
 * Created by Siarhei_Rylach on 10/31/2017.
 */

class Header{
    constructor() {
        this.facebook = element(by.css('a[title="Facebook"]'));
        this.twitter = element(by.css('a[title="Twitter"]'));
        this.instagram = element(by.css('a[title="Instagram"]'));
        this.reddit = element(by.css('a[title="Reddit"]'));
        this.googlePlus = element(by.css('a[title="Google Plus"]'));
        this.languagesList = element(by.css('#langs'));

        // to do this.logo = element(by.css('#langs'));
        this.about = element(by.css('a[title="About"]'));
        this.security = element(by.css('a[title="Security"]'));
        this.blog = element(by.css('a[title="Blog"]'));
        this.careers = element(by.css('a[title="Careers"]'));
        this.support = element(by.css('a[title="Support"]'));
        this.donate = element(by.css('a[title="Donate"]'));
        this.logIn = element(by.css('a[title="Log In"]'));
        this.signUp = element(by.css('a[title="Sign Up"]'));
    };

}

module.exports = Header;