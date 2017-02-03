var React = require('react');
var { connect } = require('react-redux');
var moment = require('moment');
var actions = require('actions');

var Player = React.createClass({
  render: function () {
    var { id, score, time, avatar, level, won, lost, dispatch } = this.props;

    var diffPercent = ((won / (lost + won)) * 100).toFixed(2);
    var formatedTime = moment.unix(time).format('MM/DD/YY h:mm a');
    return (
      <div className="player">

        <div className="psn_holder">
          <p className="psn">{id}</p>
          <p className="player__subtext">{formatedTime}</p>
        </div>


        <div className="psn_holder2" onClick={() => {
          dispatch(actions.setSortPlayers('score'));
        }}>
          <p className="psn">Competitive</p>
          <p className="stat_header">{score}</p>
        </div>
        <div className="psn_holder2" onClick={() => {
          dispatch(actions.setSortPlayers('level'));
        }}>
          <p className="psn">Level</p>
          <p className="stat_header">{level}</p>
        </div>
        <div className="psn_holder2" onClick={() => {
          dispatch(actions.setSortPlayers('won'));
        }}>
          <p className="psn">Won</p>
          <p className="stat_header">{won}</p>
        </div>
        <div className="psn_holder2" onClick={() => {
          dispatch(actions.setSortPlayers('lost'));
        }}>
          <p className="psn">Lost</p>
          <p className="stat_header">{lost}</p>
        </div>
        <div className="psn_holder2" onClick={() => {
          dispatch(actions.setSortPlayers('winPercent'));
        }}>
          <p className="psn">Win %</p>
          <p className="stat_header">{diffPercent}</p>
        </div>


        <div className="player_right">
          <img className="psn_img" src={avatar}/>
        </div>

      </div>
    );
  },
});

export default connect()(Player);
