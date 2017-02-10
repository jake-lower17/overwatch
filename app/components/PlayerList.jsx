import React from 'react';
import Player from 'Player';
import { connect } from 'react-redux';
import Filter from 'Filter';

export class PlayerList extends React.Component {
  render () {
    var { players, sort} = this.props;

    var renderPlayers = () => {
      if (players.length === 0) {
        return (
          <p className="container__message">No Data</p>
        );
      }

      return Filter.filterPlayers(players, sort).map((player) => {
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

  }
};

export default connect(
  (state) => {
    return state;
  }
)(PlayerList);
