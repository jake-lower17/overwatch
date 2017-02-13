var React = require('react');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
import Notes from 'Notes';
import OverwatchApp from 'OverwatchApp';
import PlayerList from 'PlayerList';

export default (
  <Router>
    <Router history={hashHistory}>
      <Route path="/" component={OverwatchApp}>
        <Route path="notes" component={Notes}/>
        <IndexRoute component={PlayerList}/>
      </Route>
    </Router>
  </Router>
);