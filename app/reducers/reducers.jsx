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
