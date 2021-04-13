const { resolve } = require('path');
const { readdirSync } = require('fs');
const { Client } = require('discord.js');

class SteamRobot extends Client {

    constructor() {
        super();
    }

    get directory() {
        return resolve(`./src/`);
    }

    /**
     * Login the Discord client
     * @param {string} token
     * @returns {Promise<string>}
     */
    async login(token) {
        try {
            token = await super.login(token);
            return token.slice(0, 4) + '.****';
        } catch (e) {
            throw new Error(e);
        }
    }

    loadEvents() {
        readdirSync(`${this.directory}/events/`).forEach((file) => {
            const event = new (require(`${this.directory}/events/${file}`))(this);
            super.on(file.split('.js')[0], (...args) => event.run(...args));
        });
        console.log(`Client // Events are loaded!`);
    }

    init () {
        this.loadEvents();
    }

}

module.exports = { SteamRobot };