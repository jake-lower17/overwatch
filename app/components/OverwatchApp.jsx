import React from 'react';
import PlayerList from 'PlayerList';

export class OverwatchApp extends React.Component {
  render () {
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
  }
};

module.exports = OverwatchApp;
