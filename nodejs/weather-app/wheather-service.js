const request = require('request')
const config = require('./config.js');

const getWeather = function(geolocation, callback) {

    const url = config.WHEATER_BASE_URL + '?access_key=' + config.WHEATER_TOKEN + '&query='+geolocation[1]+','+geolocation[0]+'&units=m'
    
    return request({ url: url, json: true }, (error, response) => {
        callback(response.body.current)
    })
}

module.exports = {getWeather: getWeather}