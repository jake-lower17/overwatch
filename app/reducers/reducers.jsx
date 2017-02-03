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

export var sortReducer = (state = [], action) => {
  switch (action.type) {
    case 'SORT_PLAYERS':
      console.log('Hello World');
      return action.sort;
    default:
      return state;
  };
};
