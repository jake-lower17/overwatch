var React = require('react');
import PlayerList from 'PlayerList';

var OverwatchApp = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Team Tracker</h1>
        <div className="row">
          <div className="column small-centered small-12 medium-12 large-10">
            <div className="container">
              <PlayerList/>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = OverwatchApp;
