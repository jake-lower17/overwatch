var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var OverwatchApp = require('OverwatchApp');

var store = require('configureStore').configure();
var actions = require('actions');

// Load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationsStyles');

store.dispatch(actions.startAddPlayers());

ReactDOM.render(
    <OverwatchApp/>,
  document.getElementById('app')
);
