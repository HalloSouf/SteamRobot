/**
 * EventBase
 */
class EventBase {

    /**
     * Client instance
     * @param {Client} client
     */
    constructor(client) {

        /**
         * Client instance
         * @private
         * @readonly
         */
        Object.defineProperty(this, 'client', { value: client });

    }

}

module.exports = { EventBase };