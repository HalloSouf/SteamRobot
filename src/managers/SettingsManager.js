const { BaseManager } = require('./BaseManager');
const defaultsettings = require('../config/defaultsettings.json');

/**
 * SettingsManager
 * @extends BaseManager
 */
class SettingsManager extends BaseManager {

    /**
     * Fetch all settings
     * @param {SettingsOptions} options
     * @returns {Promise<Settings[]>}
     * @private
     */
    _fetchAll(options) {
        return new Promise((resolve, _) => {
            this.sql.query(`SELECT * FROM settings WHERE guild_id = ?`, [options.guild], (_, rows) => {
                let data = [];
                for (let i = 0; i < rows.length; i++) {
                    data.push(this._create(rows[i]));
                }
                resolve(data);
            });
        });
    }

    /**
     * Retrieve all guild settings
     * @param {SettingsOptions} options
     * @returns {Promise<Settings[]>}
     */
    async all(options) {
        return await this._fetchAll(options);
    }

    /**
     * Initialise guild settings
     * @param {string} guildid
     * @returns {Promise<void>}
     */
    async init(guildid) {
        for (let i = 0; i < defaultsettings.length; i++) {
            this.sql.query(`INSERT INTO settings(guild_id, setting, value, created_at) VALUES(?, ?, ?, ?)`, [guildid, defaultsettings[i].setting, defaultsettings[i].value, new Date()], (err, _) => {
                if (err) console.log(err);
            });
        }
    }

    /**
     * Create settings objects
     * @param {mysql.settings} data
     * @returns {Settings}
     * @private
     */
    _create(data) {
        return {
            setting: data.setting,
            value: data.value,
            created_at: data.created_at,
            updated_at: data.updated_at
        }
    }

}

module.exports = { SettingsManager };