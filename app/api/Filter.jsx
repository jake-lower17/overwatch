module.exports = {
  filterPlayers: function (players) {
    var filteredPlayers = players;

    // Sort Todos with non-score first
    filteredPlayers.sort((a, b) => {

      if (a.score < b.score) {
        return 1;
      } else if (a.score > b.score) {
        return -1;
      }else {
        return 0;
      }
    });

    return filteredPlayers;
  },
};
