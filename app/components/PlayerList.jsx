var React = require('react');
var Player = require('Player');

var PlayerList = React.createClass({
  render: function () {
    return (
      <div>
        <Player/>
      </div>
    );
  },
});

module.exports = PlayerList;
