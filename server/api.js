var axios = require('axios');

//Get basic stats
module.exports.getPlayerData = function (psn) {
  var requestUrl = `https://api.lootbox.eu/psn/us/${psn}/profile`;
  return axios.get(requestUrl).then(function (res) {
    if (res.data.error) {
      throw new Error(res.data.error);
    }else {
      //return res.data.main.temp;
      return [psn, res.data.data.competitive.rank, res.data.data.avatar, res.data.data.level, res.data.data.games.competitive.wins, res.data.data.games.competitive.lost];
    }
    console.log(requestUrl);
  },

  function (res) {
    throw new Error('Data error player data.');
  });

};

//advanced stats
module.exports.getPlayerDataAdvanced = function (psn) {
  var requestUrl = `https://api.lootbox.eu/psn/us/${psn}/competitive/allHeroes/`;
  return axios.get(requestUrl).then(function (res) {
    if (res.data.error) {
      throw new Error(res.data.error);
    }else {

      //MAX in competitive game
      //return [psn, res.data['HealingDone-MostinGame'], res.data['DamageDone-MostinGame'], res.data['Eliminations-MostinGame'], res.data['SoloKills-MostinGame'], res.data['TimeSpentonFire-MostinGame']];

      //AVG in competitive game
      return [psn, res.data['HealingDone-Average'], res.data['DamageDone-Average'], res.data['Eliminations-Average'], res.data['SoloKills-Average'], res.data['TimeSpentonFire-Average']];

    }
  },

  function (res) {
    throw new Error('Data error player data advanced.');
  });

};

module.exports.getAchievements = function (psn) {
  var requestUrl = `https://api.lootbox.eu/psn/us/${psn}/achievements`;
  return axios.get(requestUrl).then(function (res) {
    if (res.data.error) {
      throw new Error(res.data.error);
    }else {
      return [psn, res.data];
    }
  },

  function (res) {
    throw new Error('Data error player data Achievements.');
  });

};

//Patch notes
module.exports.getPatchNotes = function () {
  var requestUrl = `https://api.lootbox.eu/patch_notes`;
  return axios.get(requestUrl).then(function (res) {
    if (res.data.error) {
      throw new Error(res.data.error);
    }else {
      //return res.data.main.temp;
      return res.data.patchNotes;
    }
  },

  function (res) {
    throw new Error('Data error patch notes.');
  });
};
