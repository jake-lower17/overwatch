var firebase = require('firebase');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log('Hello');

try {
  envFile(path.join(__dirname, '../config/' + process.env.NODE_ENV + '.env'));
} catch (e) {
  console.log(e);
}

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER,
};
firebase.initializeApp(config);

module.exports.firebaseRef = firebase.database().ref();
