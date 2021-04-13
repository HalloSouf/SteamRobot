const { config } = require('dotenv');

const { SteamRobot } = require('./structures/SteamRobot');
const client = new SteamRobot();

// Environment variables
config();

// Login client
client.login(`${process.env.CLIENT_TOKEN}`)
    .then((token) => {
        console.log(`Client // Initializing connection with ${token}`);
        client.init();
    });