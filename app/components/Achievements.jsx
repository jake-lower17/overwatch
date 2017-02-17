import React from 'react';
import { connect } from 'react-redux';
var actions = require('actions');


export class Achievement extends React.Component {

  // componentDidMount () {
  //   var { dispatch, player } = this.props;
  //   if (typeof player != 'undefined'){
  //     dispatch(actions.startAddAchievements(player));
  //   }
  // }
  //
  // componentWillUnmount () {
  //   var { dispatch, player } = this.props;
  //   dispatch(actions.removeAchievements());
  // }

  decodeHtml (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  getPlayer (players, player) {
    return players.find(function (item) {
      return item.id === player;
    });
  }

  render () {

    var { achievements, player, players } = this.props;
    var playerHolder = this.getPlayer(players, player);
    var renderAchievements = () => {
      var classNameAchievement = 'achievement-container';
      var loadingMessage = `Loading achievements ${player}`;
      return playerHolder.achievements.achievements.map((achievement) => {
        if (achievement.finished) {
          classNameAchievement = `${classNameAchievement} finished-achievement`;
        }else {
          classNameAchievement = 'achievement-container';
        }

        var titleNew = this.decodeHtml(achievement.name);
        var descriptionNew = this.decodeHtml(achievement.description);
        return (
          <div className={classNameAchievement}>
            <h3>{titleNew}</h3>
            <p>{descriptionNew}</p>
            <img src={achievement.image} />
          </div>
        );
      });
    };

    var renderHeader = () => {
      var classNameAchievement = 'achievement-container';
      var loadingMessage = `Loading achievements ${player}`;
        return (
          <div className="data-cell">
              <p className="psn"><span className="psn">{player}:</span> <span className="stat_header">{playerHolder.achievements.finishedAchievements}</span></p>
              <div className="player_right">
                <img className="psn_img" src={playerHolder.avatar}/>
              </div>
          </div>
        );
    };

    return (
      <div>
        {renderHeader()}
        <div className="achievements">
          {renderAchievements()}
        </div>
      </div>
    );
  }
};

export default connect(
  (state) => {
    return {
      player: state.player,
      players: state.players
    };
  }
)(Achievement);
