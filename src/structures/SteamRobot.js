const { readdirSync } = require('fs');
const { resolve } = require('path');
const { Client, Collection } = require('discord.js');

/**
 * SteamRobot
 * @extends {Client}
 */
class SteamRobot extends Client {

    constructor(options = {}) {
        super(options);

        this.commands = new Collection();
        this.aliases = new Collection();
    }

    /**
     * Get directory
     * @returns {string}
     */
    get directory() {
        return resolve(`./src/`);
    }

    /**
     * Load events
     */
    loadEvents() {
        readdirSync(`${this.directory}/events/`).forEach((file) => {
            if (!file.endsWith('.js')) return;

            const event = new (require(`${this.directory}/events/${file}`))(this);
            try {
                super.on(file.split('.')[0], (...args) => event.run(...args));
            } catch (e) {
                console.log(`Client // ${e}`);
            }
        });
        console.log(`Client // Events are initialized!`);
    }

    /**
     * Login Discord client
     * @param {string} token
     * @returns {Promise<string>}
     */
    async login(token) {
        if (!token)
            throw new Error('No token provided');

        try {
            token = await super.login(token);
            return token.slice(0, 4) + '.****';
        } catch (e) {
            return e;
        }
    }

    /**
     * Initialise functions
     */
    init() {
        this.loadEvents();
    }

}

module.exports = { SteamRobot };