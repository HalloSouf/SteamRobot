const { con } = require('../database/MySQLConnection');

/**
 * BaseManager
 */
class BaseManager {

    constructor() {

        /**
         * MySQL Connection
         * @readonly
         * @private
         */
        Object.defineProperty(this, 'sql', { value: con.connection });

    }

}

module.exports = { BaseManager };