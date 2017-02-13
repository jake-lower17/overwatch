import React from 'react';
import Nav from 'Nav';
import PlayerList from 'PlayerList';

export class OverwatchApp extends React.Component {
  render () {
    return (
      <div>
        <h1>Overwatch Team Tracker</h1>
        <div className="row">
          <div className="column small-centered small-12 medium-12 large-10">
            <div className="container">
              <Nav />
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

module.exports = OverwatchApp;
