const { BaseManager } = require('./BaseManager');
const colors = require('../config/colors.json');

/**
 * UtilityManager
 * @extends BaseManager
 */
class UtilityManager extends BaseManager {

    /**
     * Retrieve all colors
     * @returns {Colors}
     */
    get colors() {
        return colors;
    }

}

module.exports = { UtilityManager };