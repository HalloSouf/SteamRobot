const { resolve } = require('path');
const { readdirSync } = require('fs');
const { Client, Collection } = require('discord.js');

class SteamRobot extends Client {

    constructor() {
        super();

        this.commands = new Collection();
        this.aliases = new Collection();
    }

    /**
     * Get current directory
     * @returns {string}
     */
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

    /**
     * Load all events
     */
    loadEvents() {
        readdirSync(`${this.directory}/events/`).forEach((file) => {
            const event = new (require(`${this.directory}/events/${file}`))(this);
            super.on(file.split('.js')[0], (...args) => event.run(...args));
        });
        console.log(`Client // Events are loaded!`);
    }

    /**
     * Load commands
     */
    loadCommands() {
        readdirSync(`${this.directory}/commands/`).forEach((dirs) => {
            const commands = readdirSync(`${this.directory}/commands/${dirs}/`).filter((file) => file.endsWith('.js'));
            for (const file of commands) {
                const command = new (require(`${this.directory}/commands/${dirs}/${file}`))(this);
                if (command.props && typeof (command.props.name) === 'string' && typeof (command.props.category === 'string')) {
                    if (this.commands.get(command.props.name)) return;
                    this.commands.set(command.props.name, command);
                } else {
                    console.log(`Client // Error while loading command in commands/${dirs}`);
                }
            }
        });
        console.log(`Client // Commands are loaded!`);
    }

    /**
     * Initialise blocks
     */
    init () {
        this.loadEvents();
        this.loadCommands();
    }

}

module.exports = { SteamRobot };