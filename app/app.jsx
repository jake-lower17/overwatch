import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import firebase, { firebaseRef } from 'app/firebase/';

import OverwatchApp from 'OverwatchApp';
var actions = require('actions');
var store = require('configureStore').configure();

// Load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationsStyles');

store.dispatch(actions.startAddPlayers());

firebaseRef.on('value', (snapshot) => {
  store.dispatch(actions.startAddPlayers());
});

ReactDOM.render(
  <Provider store={store}>
    <OverwatchApp/>
  </Provider>,
  document.getElementById('app')
);
