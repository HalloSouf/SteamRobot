const { config } = require('dotenv');
config();

const { SteamRobot } = require('./structures/SteamRobot');
const client = new SteamRobot();

const { con } = require('./database/MySQLConnection');
con.connect();

// Login client
client.login(`${process.env.CLIENT_TOKEN}`)
    .then((token) => {
        console.log(`Client // Initializing connection with ${token}`);
        client.init();
    });