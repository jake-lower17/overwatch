var React = require('react');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
import Notes from 'Notes';
import OverwatchApp from 'OverwatchApp';

export default (
  <Router>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="notes" component={Notes}/>
        <IndexRoute component={OverwatchApp}/>
      </Route>
    </Router>
  </Router>
);
