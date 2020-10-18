const request = require('request')
const config = require('../config.js');

const getWeather = (latitude, longitude, callback) => {

    const url = config.WHEATER_BASE_URL + '?access_key=' + config.WHEATER_TOKEN + '&query=' + longitude + ',' + latitude + '&units=m'
    
    return request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to wheater service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Please try another search.', undefined)
        } else {
            callback(body.current)
        }
    })
}

module.exports = getWeather