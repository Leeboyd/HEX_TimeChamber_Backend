const mongoose = require('mongoose')
const dev = require('../dev.env')

const MONGODB_URI = process.env.NODE_ENV === 'development'
  ? dev.MONGODB_URI
  : process.env.HEX01_MONGODB

mongoose.connect(MONGODB_URI)

// MongoDB success callback
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + MONGODB_URI);
});

// MongoDB error callback
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// MongoDB disconnected callback
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

module.exports = mongoose