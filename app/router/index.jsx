var React = require('react');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
import Notes from 'Notes';
import OverwatchApp from 'OverwatchApp';
import PlayerList from 'PlayerList';
import Achievements from 'Achievements';
import AddPlayer from 'AddPlayer';

export default (
  <Router>
    <Router history={hashHistory}>
      <Route path="/" component={OverwatchApp}>
        <Route path="notes" component={Notes}/>
        <Route path="achievements" component={Achievements}/>
        <Route path="addPlayer" component={AddPlayer}/>
        <IndexRoute component={PlayerList}/>
      </Route>
    </Router>
  </Router>
);
