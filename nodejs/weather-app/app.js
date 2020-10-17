const getGeolocation = require('./client/geolocation-service')
const getWeather = require('./client/wheather-service')

const address = process.argv[2]

if(!address) {
    console.log('Please provide address')
} else {
    getGeolocation(address, (error, geolocation) => {
        if (error) {
            return console.log('Error', error);
        }
    
        getWeather(geolocation.latitude, geolocation.longitude, (forecast) => {
            if(error) {
                return console.log(error)
            }
            console.log(geolocation.location)
            console.log(forecast)
        })
    })
}