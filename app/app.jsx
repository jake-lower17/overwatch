var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// Load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationsStyles');

ReactDOM.render(
  <p>Overwatch APP</p>,
  document.getElementById('app')
);
