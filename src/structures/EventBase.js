const { SettingsManager } = require('../managers/SettingsManager');
const { con } = require('../database/MySQLConnection');

/**
 * EventBase
 */
class EventBase {

    /**
     * @param {Client} client
     */
    constructor(client) {

        /**
         * SettingsManager
         * @readonly
         */
        Object.defineProperty(this, 'settings', { value: new SettingsManager() });

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

    }

}

module.exports = { EventBase };