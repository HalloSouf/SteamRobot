const { EventBase } = require('../structures/EventBase');

class Ready extends EventBase {

    constructor(client) {
        super(client);
    }

    async run() {
        console.log(`Client // ${this.client.user.tag} is ready!`);
    }

}

module.exports = Ready;