import React from 'react';
import { connect } from 'react-redux';
var actions = require('actions');

export class Achievement extends React.Component {

  componentDidMount () {
    var { dispatch } = this.props;
    dispatch(actions.startAddAchievements('snake187eh'));
  }



  render () {
    var { achievements } = this.props;
    var renderAchievements = () => {
      if (achievements.length === 0) {
        return (
          <p className="container__message">Loading....</p>
        );
      }

      return achievements.map((achievement) => {
        return (
          <div className="data-cell notes">{achievement.name}</div>
        );
      });
    };

    return (
      <div>
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
