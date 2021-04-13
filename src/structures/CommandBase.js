/**
 * CommandBase
 */
class CommandBase {

    /**
     * @param {Client} client
     * @param {CommandProperties} props
     */
    constructor(client, props = {
        name: null,
        description: '',
        category: 'general',
        usage: '',
        aliases: [],
        permission: 'SEND_MESSAGES'
    }) {

        /**
         * Client instance
         * @readonly
         * @private
         */
        Object.defineProperty(this, 'client', { value: client });

        /**
         * Properties
         * @readonly
         * @private
         */
        Object.defineProperty(this, 'props', { value: props });

    }

}

module.exports = { CommandBase };