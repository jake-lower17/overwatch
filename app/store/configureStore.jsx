import * as redux from 'redux';
import thunk from 'redux-thunk';

import { playersReducer, sortReducer, notesReducer, achievementsReducer } from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    players: playersReducer,
    sort: sortReducer,
    notes: notesReducer,
    achievements: achievementsReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
