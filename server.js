var express = require('express');
var firebase = require('firebase');
var axios = require('axios');
var moment = require('moment');

var config = {
  apiKey: 'AIzaSyBYmSp8p_ZwRDvCSk-C3DUHwuspQn8ITGc',
  authDomain: 'ow-app-3f4bb.firebaseapp.com',
  databaseURL: 'https://ow-app-3f4bb.firebaseio.com',
  storageBucket: 'ow-app-3f4bb.appspot.com',
  messagingSenderId: '96962695775',
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();
var competitiveRef = firebaseRef.child('competitive');
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
};

setInterval(callData, 900000);
