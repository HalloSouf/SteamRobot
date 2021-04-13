const { BaseEvent } = require('../structures/BaseEvent');

/**
 * Ready event
 * @extends {BaseEvent}
 */
class Ready extends BaseEvent {

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