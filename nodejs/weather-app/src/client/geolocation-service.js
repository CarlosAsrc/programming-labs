const request = require('request')
const config = require('../config.js');


const getGeolocation = (address, callback) => {
    
    const url = config.MAPBOX_BASE_URL + '/' + encodeURIComponent(address) + '.json?access_token=' + config.MAPBOX_TOKEN + '&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Please try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = getGeolocation