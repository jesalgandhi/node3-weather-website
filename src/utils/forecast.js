const request = require('postman-request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7f2c7a77dd1cbc71da3e6a286f31b48b&query=' + lon + ',' + lat + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        
        if (error) {
            callback('Unable to connect to weatherstack service', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees.' + ' It feels like ' + body.current.feelslike + ' degrees out. '
            + 'The time at observation was ' + body.current.observation_time + '.')
        }
    })
}

module.exports = forecast
