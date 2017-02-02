var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
import firebase, { firebaseRef } from 'app/firebase/';

var OverwatchApp = require('OverwatchApp');

var store = require('configureStore').configure();
var actions = require('actions');

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
