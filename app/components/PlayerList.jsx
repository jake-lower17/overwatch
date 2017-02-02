var React = require('react');
import Player from 'Player';
var { connect } = require('react-redux');
var Filter = require('Filter');

var PlayerList = React.createClass({
  render: function () {
    var { players } = this.props;

    var renderPlayers = () => {
      if (players.length === 0) {
        return (
          <p className="container__message">No Data</p>
        );
      }

      return Filter.filterPlayers(players).map((player) => {
        return (
          <Player key={player.id} {...player} />
        );
      });
    };

    return (
      <div>
        {renderPlayers()}
      </div>
    );

  },
});

export default connect(
  (state) => {
    return state;
  }
)(PlayerList);
