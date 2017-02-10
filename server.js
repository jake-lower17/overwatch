var express = require('express');
var firebase = require('firebase');
var axios = require('axios');
var moment = require('moment');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER,
};
console.log(config);
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();
// firebaseRef.set({
//   app: {
//     name: 'Todo App',
//     version: '1.0.0',
//   },
//   isRunning: true,
//   user: {
//     name: 'Jake',
//     age: 27,
//   },
// });
var competitiveRef = firebaseRef.child('competitive');

//Get basic stats
function getPlayerData(psn) {
  var requestUrl = `https://api.lootbox.eu/psn/us/${psn}/profile`;
  return axios.get(requestUrl).then(function (res) {
    if (res.data.error) {
      throw new Error(res.data.error);
    }else {
      //return res.data.main.temp;
      return [psn, res.data.data.competitive.rank, res.data.data.avatar, res.data.data.level, res.data.data.games.competitive.wins, res.data.data.games.competitive.lost];
    }
  },

  function (res) {
    throw new Error('Unable to score.');
  });

};

//advanced stats
function getPlayerDataAdvanced(psn) {
  var requestUrl = `https://api.lootbox.eu/psn/us/${psn}/competitive/allHeroes/`;
  return axios.get(requestUrl).then(function (res) {
    if (res.data.error) {
      throw new Error(res.data.error);
    }else {
      //return res.data.main.temp;
      return [psn, res.data['HealingDone-MostinGame'], res.data['DamageDone-MostinGame'], res.data['Eliminations-MostinGame'], res.data['SoloKills-MostinGame'], res.data['TimeSpentonFire-MostinGame']];
    }
  },

  function (res) {
    throw new Error('Unable to score.');
  });

};

//create our app
var app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.listen(port, function () {
  console.log('Express server is up on port ' + port);
});

callData();

//Players to search
function callData() {
  var playerList = ['UnsocialRock', 'snake187eh', 'Pumkinhead89', 'lower_44', 'Cwally7', 'shiboodles', 'zlower7'];
  competitiveRef = firebaseRef.child('competitive');

  for (i = 0; i < playerList.length; i++) {
    score = getPlayerData(playerList[i]).then(function (score) {
      PlayerRef = competitiveRef.child(score[0]);
      console.log(score[0], ' ', score[1]);
      if (!score[1]) {
        score[1] = 0;
      };

      PlayerRef.update({
        score: parseInt(score[1]),
        avatar: score[2],
        level: parseInt(score[3]),
        won: parseInt(score[4]),
        lost: parseInt(score[5]),
        time: moment().unix(),
      });
      return score;
    }, function (e) {
      console.log(e);
    });
  }

  for (i = 0; i < playerList.length; i++) {
    score = getPlayerDataAdvanced(playerList[i]).then(function (score) {
      PlayerRef = competitiveRef.child(score[0]);
      console.log(score[0], ' ', score[1]);
      if (!score[1]) {
        score[1] = 0;
      };

      PlayerRef.update({
        healing: parseInt(score[1].replace(',','')),
        damage: parseInt(score[2].replace(',','')),
        kills: parseInt(score[3].replace(',','')),
        solo: parseInt(score[4].replace(',','')),
        fire: score[5],
      });
      return score;
    }, function (e) {
      console.log(e);
    });
  }

};

setInterval(callData, 300000);
