const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=ACCESS_KEY&query=-30.111413,-51.109846&units=m'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current)
})