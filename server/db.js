const mongoose = require('mongoose')

mongoose.connect(`mongodb://mongo:27017/docker-db`)

const db = mongoose.connection
db.on('error', () => {
  console.log('connection error')
})

db.once('open', () => {
  console.log('successfully connected to db')
})

module.exports = db