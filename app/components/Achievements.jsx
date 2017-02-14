import React from 'react';
import { connect } from 'react-redux';
var actions = require('actions');


export class Achievement extends React.Component {

  componentDidMount () {
    var { dispatch, player } = this.props;
    if (typeof player != 'undefined'){
      dispatch(actions.startAddAchievements(player));
    }
  }

  componentWillUnmount () {
    var { dispatch, player } = this.props;
    dispatch(actions.removeAchievements());
  }

  decodeHtml (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  render () {

    var { achievements, player } = this.props;
    var renderAchievements = () => {
      var classNameAchievement = 'achievement-container';
      var loadingMessage = `Loading achievements ${player}`;
      debugger;
      if (typeof achievements.achievements === 'undefined') {
        return (
          <p className="container__message">{loadingMessage}</p>
        );
      }

      return achievements.achievements.map((achievement) => {

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
      debugger;
      if (typeof achievements.achievements !== 'undefined') {
        return (
          <div className="achievements">
            <p className="psn">{player}</p>
            <p className="stat_header">{achievements.finishedAchievements}</p>
          </div>
        );
      }else {
        return (' ');
      }
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
      achievements: state.achievements,
      player: state.player
    };
  }
)(Achievement);
