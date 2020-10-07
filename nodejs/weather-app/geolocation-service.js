const request = require('request')
const config = require('./config.js');

const url = config.MAPBOX_BASE_URL + '/Porto%20Alegre.json?access_token=' + config.MAPBOX_TOKEN + '&limit=1'

const getGeolocation = function(callback) {
    request({ url: url, json: true }, (error, response) => {
        callback(response.body.features[0].center)
    })
}

module.exports = {getGeolocation: getGeolocation}