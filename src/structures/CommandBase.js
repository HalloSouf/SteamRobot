const { UtilityManager } = require('../managers/UtilityManager');
const { con } = require('../database/MySQLConnection');

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
         * UtilityManager
         * @private
         */
        Object.defineProperty(this, 'utility', { value: new UtilityManager() });

        /**
         * MySQL Connection
         * @readonly
         * @private
         */
        Object.defineProperty(this, 'sql', { value: con.connection });

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