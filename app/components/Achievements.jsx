import React from 'react';
import { connect } from 'react-redux';
var actions = require('actions');

export class Achievement extends React.Component {

  componentDidMount () {
    var { dispatch } = this.props;
    dispatch(actions.startAddAchievements('snake187eh'));
  }

  decodeHtml (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  render () {

    var { achievements } = this.props;
    var renderAchievements = () => {
      var classNameAchievement = 'achievement-container';
      if (achievements.length === 0) {
        return (
          <p className="container__message">Loading.....</p>
        );
      }

      return achievements.map((achievement) => {

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

    return (
      <div className="achievements">
        {renderAchievements()}
      </div>
    );
  }
};

export default connect(
  (state) => {
    return {
      achievements: state.achievements
    };
  }
)(Achievement);
