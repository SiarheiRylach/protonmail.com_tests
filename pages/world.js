/**
 * Created by Siarhei_Rylach on 10/31/2017.
 */

const HomePage = require('./home.page.js');

class World {
    constructor() {
        this.homePage = new HomePage();
    };

}

module.exports = new World();