const wheatherService = require('./wheather-service')
const geolocationService = require('./geolocation-service')


geolocationService.getGeolocation((geolocation) => {
    wheatherService.getWeather(geolocation, (weather) => {
        console.log(weather)
    })
})