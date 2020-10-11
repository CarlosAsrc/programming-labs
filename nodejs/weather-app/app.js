const wheatherService = require('./client/wheather-service')
const geolocationService = require('./client/geolocation-service')


geolocationService.getGeolocation('Porto Alegre', (error, geolocation) => {

    if (error) {
        console.log('Error', error);
    } else {
        wheatherService.getWeather(geolocation.latitude, geolocation.longitude, (data) => {
            console.log(data)
        })
    }
})