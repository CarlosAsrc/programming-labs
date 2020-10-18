const getGeolocation = require('./client/geolocation-service')
const getWeather = require('./client/wheather-service')

const address = process.argv[2]

if(!address) {
    console.log('Please provide address')
} else {
    getGeolocation(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log('Error', error);
        }
    
        getWeather(latitude, longitude, (forecast) => {
            if(error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecast)
        })
    })
}