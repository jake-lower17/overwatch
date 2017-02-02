import firebase, { firebaseRef } from 'app/firebase/';
import moment from 'moment';

export var addPlayers = (player) => {
  return {
    type: 'ADD_PLAYERS',
    player: player,
  };
};

export var startAddPlayers = () => {
  return (dispatch, getState) => {
    var playerRef = firebaseRef.child('competitive');
    return playerRef.once('value').then((snapshot) => {
      var player = snapshot.val() || {};
      var parsedPlayers = [];

      Object.keys(player).forEach((todoID) => {
        parsedPlayers.push({
          id: todoID,
          ...player[todoID],
        });
      });

      dispatch(addPlayers(parsedPlayers));
      console.log('got database ', player);
    }, (e) => {
      console.log('unable to fetch data', e);
    });
  };
};
