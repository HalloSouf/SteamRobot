const { EventBase } = require('../structures/EventBase');

/**
 * Message event
 * @extends {EventBase}
 */
class Message extends EventBase {

    constructor(client) {
        super(client);
    }

    /**
     * Run code
     * @param message
     * @returns {Promise<void>}
     */
    async run(message) {

        if (message.author.bot || message.system)
            return;

        if (!message.member && message.guild)
            message.member = await message.guild.members.fetch(message.author);

        if (!message.content.startsWith('!'))
            return;

        const [cmd, ...args] = message.content.slice('-'.length).trim().split(/ +/g);

        const command = this.client.commands.get(cmd);
        if (command) command.run(message, args);

    }

}

module.exports = Message;