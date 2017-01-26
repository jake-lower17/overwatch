var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// Load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationsStyles');

ReactDOM.render(
  <p>Boilerplate 3</p>,
  document.getElementById('app')
);
