const fs = require('fs')

const readBuffer = fs.readFileSync('data.json')
const data = JSON.parse(readBuffer)

data.planet = 'Mars'

const writeBuffer = JSON.stringify(data)
fs.writeFileSync('data.json', writeBuffer)