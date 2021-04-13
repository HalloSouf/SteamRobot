/**
 * EventBase
 */
class EventBase {

    /**
     * @param {Client} client
     */
    constructor(client) {

        /**
         * Client instance
         * @readonly
         * @private
         */
        Object.defineProperty(this, 'client', { value: client });

    }

}

module.exports = { EventBase };