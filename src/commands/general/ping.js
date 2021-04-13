const { CommandBase } = require('../../structures/CommandBase');

/**
 * Ping command
 * @extends {CommandBase}
 */
class Ping extends CommandBase {

    /**
     * @param {Client} client
     */
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Pong!',
            category: 'general'
        });
    }

    /**
     * Run code
     * @param message
     * @param {Array<string>} args
     * @returns {Promise<void>}
     */
    async run(message, args) {

        await message.channel.send({
            embed: {
                fields: [
                    { name: '**Pong**', value: `Received a latency of **${this.client.ws.ping}ms**!` }
                ],
                footer: {
                    text: `SteamRobot`
                },
                timestamp: new Date()
            }
        });

    }

}

module.exports = Ping;