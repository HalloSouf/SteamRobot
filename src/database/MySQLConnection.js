const { createConnection } = require('mysql');

/**
 * MySQL Connection
 */
class MySQLConnection {

    /**
     * MySQL connection
     * @private
     */
    _connection;

    /**
     * @param {MySQLConfig} options
     */
    constructor(options) {
        this.options = options;
    }

    /**
     * Connect with MySQL database
     */
    connect() {
        if (!this.options.host)
            throw new Error('MySQL // No given host');

        if (!this.options.user)
            throw new Error('MySQL // No given user');

        if (!this.options.database)
            throw new Error('MySQL // No given database');

        this._connection = createConnection({ ...this.options });

        this._connection.connect((err) => {
            if (err)
                return console.log(`MySQL // ${err}`);

            console.log(`MySQL // ${this.options.database} is connected!`);
        });
    }

    /**
     * Retrieve MySQL connection
     * @returns {*}
     */
    get connection() {
        return this._connection;
    }

}

const mysqlcon = new MySQLConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

module.exports = { con: mysqlcon };