const { EventBase } = require('../structures/EventBase');

/**
 * Ready event
 * @extends EventBase
 */
class Ready extends EventBase {

    /**
     * @param {Client} client
     */
    constructor(client) {
        super(client);
    }

    /**
     * Run code
     * @returns {Promise<void>}
     */
    async run() {
        console.log(`Client // ${this.client.user.tag} is online!`);
    }

}

module.exports = Ready;