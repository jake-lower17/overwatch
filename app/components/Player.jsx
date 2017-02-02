var React = require('react');
var { connect } = require('react-redux');
var moment = require('moment');

var Player = React.createClass({
  render: function () {
    var { id, score, time, avatar, level, won, lost } = this.props;
    var formatedTime = moment.unix(time).format('MMM Do h:mm a');
    return (
      <div className="player">
        <div className="psn_holder">
          <p className="psn">{id}</p>
          <p className="player__subtext">{formatedTime}</p>
        </div>
        <div className="psn_holder2">
          <p className="psn">Competitive</p>
          <p className="stat_header">{score}</p>
        </div>
        <div className="psn_holder2">
          <p className="psn">Level</p>
          <p className="stat_header">{level}</p>
        </div>
        <div className="psn_holder2">
          <p className="psn">Won</p>
          <p className="stat_header">{won}</p>
        </div>
        <div className="psn_holder2">
          <p className="psn">Lost</p>
          <p className="stat_header">{lost}</p>
        </div>
        <div className="player_right">
          <img className="psn_img" src={avatar}/>
        </div>
      </div>
    );
  },
});

export default connect()(Player);
