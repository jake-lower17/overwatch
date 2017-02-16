var moment = require('moment');
var api = require('./api.js');
var firebaseConig = require('./firebaseConfig.js');

var competitiveRef = firebaseConig.firebaseRef.child('competitive');
var notesRef = firebaseConig.firebaseRef.child('notes');

callNotes(notesRef);
callData(competitiveRef);

//Players to search
function callData(competitiveRef) {
  var playerList = ['UnsocialRock', 'snake187eh', 'Pumkinhead89', 'lower_44', 'Cwally7', 'shiboodles', 'zlower7'];

  for (i = 0; i < playerList.length; i++) {
    score = api.getPlayerData(playerList[i]).then(function (score) {
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
    score = api.getPlayerDataAdvanced(playerList[i]).then(function (score) {
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

function callNotes(notesRef) {
  score = api.getPatchNotes().then(function (notes) {
    //console.log(notes);

    notesRef.set(notes);
    return notes;
  }, function (e) {
    console.log(e);
  });
}

setInterval(function () { callData(competitiveRef); }, 300000);
setInterval(function () { callNotes(notesRef); }, 3600000);
