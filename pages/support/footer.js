/**
 * Created by Siarhei_Rylach on 10/31/2017.
 */

class Footer{
    constructor() {
        //first column of links "ProtonMail"
        this.pricing = element(by.linkText('Pricing'));
        this.security = element(by.linkText('Security'));
        this.shop = element(by.linkText('Shop'));
        this.pressMediaKit = element(by.linkText('Press/Media Kit'));
        this.onionSite = element(by.linkText('Onion Site'));

        //second column of links "Legal"
        this.imprint = element(by.linkText('Imprint'));
        this.privacyPolicy = element(by.linkText('Privacy Policy'));
        this.termsConditions = element(by.linkText('Terms & Conditions'));
        this.transparencyReport = element(by.linkText('Transparency Report'));
        this.reportAbuse = element(by.linkText('Report Abuse'));

        //third column of links "Company"
        this.blog = element(by.linkText('Blog'));
        this.team = element(by.linkText('Team'));
        this.careers = element(by.linkText('Careers'));
        this.support = element(by.linkText('Support'));
        this.donate = element(by.linkText('Donate'));

        //fourth column of links "Social"
        this.facebook = element(by.css('.fb>a'));
        this.twitter = element(by.css('.tw>a'));
        this.findUsOnGooglePlus = element(by.css('.gplus>a'));
        this.feedbackForum = element(by.css('.fb-forum>a'));
        this.reddit = element(by.css('.fb-reddit>a'));

        // to do rights this.rights


        this.languagesList = element(by.css('.locales'));

        //every language
        this.english = element(by.css('a[data-lang="en"]'));
        this.spanish = element(by.css('a[data-lang="es"]'));
        this.german = element(by.linkText('Deutsch'));         //?
        this.nederlands = element(by.linkText('Nederlands'));  //?
        this.french = element(by.css('a[data-lang="fr"]'));
        this.italian = element(by.css('a[data-lang="it"]'));
        this.polish = element(by.css('a[data-lang="pl"]'));
        this.russian = element(by.css('a[data-lang="ru"]'));
        this.turkish = element(by.css('a[data-lang="tr"]'));
        this.ukrainian = element(by.css('a[data-lang="ua"]'));



    };

}

module.exports = Footer;