/**
 * @file app.js
 * @version 1.0.0
 * @author HalloSouf
 */

const { config } = require('dotenv');
const { SteamRobot } = require('./structures/SteamRobot');

// Initialize environment variables
config();

// Discord client
const client = new SteamRobot();
client.login(`${process.env.CLIENT_TOKEN}`)
    .then((token) => console.log(`Client // Connection established with ${token}`))
    .catch((e) => console.log(e));

client.init();

// Error handlers
process.on('rejectionhandled', (err) => console.log(err));
process.on('unhandledrejection', (err) => console.log(err));