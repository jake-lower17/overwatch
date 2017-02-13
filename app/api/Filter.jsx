var axios = require('axios');

module.exports = {
  filterPlayers: function (players, type = 'score') {
    var filteredPlayers = players;

    // Sort Todos with non-score first
    filteredPlayers.sort((a, b) => {
      if (type === 'score' || !type || typeof(type) === 'object') {
        if (a.score < b.score) {
          return 1;
        } else if (a.score > b.score) {
          return -1;
        }else {
          return 0;
        }
      }

      if (type === 'level') {
        if (a.level < b.level) {
          return 1;
        } else if (a.level > b.level) {
          return -1;
        }else {
          return 0;
        }
      }

      if (type === 'won') {
        if (a.won < b.won) {
          return 1;
        } else if (a.won > b.won) {
          return -1;
        }else {
          return 0;
        }
      }

      if (type === 'lost') {
        if (a.lost < b.lost) {
          return 1;
        } else if (a.lost > b.lost) {
          return -1;
        }else {
          return 0;
        }
      }

      if (type === 'kills') {
        if (a.kills < b.kills) {
          return 1;
        } else if (a.kills > b.kills) {
          return -1;
        }else {
          return 0;
        }
      }

      if (type === 'solo') {
        if (a.solo < b.solo) {
          return 1;
        } else if (a.solo > b.solo) {
          return -1;
        }else {
          return 0;
        }
      }

      if (type === 'healing') {
        if (a.healing < b.healing) {
          return 1;
        } else if (a.healing > b.healing) {
          return -1;
        }else {
          return 0;
        }
      }

      if (type === 'damage') {
        if (a.damage < b.damage) {
          return 1;
        } else if (a.damage > b.damage) {
          return -1;
        }else {
          return 0;
        }
      }

      if (type === 'fire') {
        var a = a.fire.split(':');
        var b = b.fire.split(':');

        var aTime = parseInt(a[0] * 60 + a[1]);
        var bTime = parseInt(b[0] * 60 + b[1]);
        if (aTime < bTime) {
          return 1;
        } else if (aTime > bTime) {
          return -1;
        }else {
          return 0;
        }
      }

      if (type === 'winPercent') {
        var diffPercentA = ((a.won / (a.lost + a.won)) * 100).toFixed(2);
        var diffPercentB = ((b.won / (b.lost + b.won)) * 100).toFixed(2);
        if (diffPercentA < diffPercentB) {
          return 1;
        } else if (diffPercentA > diffPercentB) {
          return -1;
        }else {
          return 0;
        }
      }

    });

    return filteredPlayers;
  },

  //Get basic stats
  getAchievements: function (psn) {
    var requestUrl = `https://api.lootbox.eu/psn/us/${psn}/achievements`;
    return axios.get(requestUrl).then(function (res) {
      if (res.data.error) {
        throw new Error(res.data.error);
      }else {
        console.log('Achievement Call');
        return [res.data];
      }
    },

    function (res) {
      throw new Error('Data error player data.');
    });

  },
};
