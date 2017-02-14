var moment = require('moment');

export var playersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYERS':
      return [
        ...action.player,
      ];
    default:
      return state;
  }
};

export var achievementsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ACHIEVEMENTS':
      return {
        ...action.achievements,
      };
    case 'REMOVE_ACHIEVEMENTS':
      return {};
    default:
      return state;
  }
};

export var setPlayerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLAYER_ACHIEVEMENT':
      return action.player;
    default:
      return state;
  }
};

export var notesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTES':
      return [
        ...action.note,
      ];
    default:
      return state;
  }
};

export var sortReducer = (state = [], action) => {
  switch (action.type) {
    case 'SORT_PLAYERS':
      return action.sort;
    default:
      return state;
  };
};
