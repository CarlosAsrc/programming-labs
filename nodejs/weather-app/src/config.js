const dotenv = require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    WHEATER_BASE_URL: process.env.WHEATER_BASE_URL,
    MAPBOX_BASE_URL: process.env.MAPBOX_BASE_URL,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
    WHEATER_TOKEN: process.env.WHEATER_TOKEN
}