import firebase, { firebaseRef } from 'app/firebase/';
import moment from 'moment';

export var addPlayers = (player) => {
  return {
    type: 'ADD_PLAYERS',
    player: player,
  };
};

export var addNotes = (note) => {
  return {
    type: 'ADD_NOTES',
    note: note,
  };
};

export var setSortPlayers = (sort) => {
  return {
    type: 'SORT_PLAYERS',
    sort: sort,
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

export var startAddNotes = () => {
  return (dispatch, getState) => {
    var notesRef = firebaseRef.child('notes');
    return notesRef.once('value').then((snapshot) => {
      var notes = snapshot.val() || {};
      var parsedNotes = [];
      Object.keys(notes).forEach((note) => {
        parsedNotes.push({
          id: note,
          ...notes[note],
        });
      });
      dispatch(addNotes(parsedNotes));
      console.log('got database ', notes);
    }, (e) => {
      console.log('unable to fetch data', e);
    });
  };
};
