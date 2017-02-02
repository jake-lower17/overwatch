var React = require('react');
var PlayerList = require('PlayerList');

var OverwatchApp = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Overwatch APP.jsx</h1>
        <div className="row">
          <div className="column small-centered small-12 medium-12 large-6">
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
