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
};
