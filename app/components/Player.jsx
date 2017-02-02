var React = require('react');
var { connect } = require('react-redux');
var moment = require('moment');

var Player = React.createClass({
  render: function () {
    var { id, score, time } = this.props;
    var formatedTime = moment.unix(time).format('MMM Do YYYY h:mm a')
    return (
      <div className="player">
        <div className="psn_holder">
          <p className="psn">{id}</p>
          <p className="player__subtext">{formatedTime}</p>
        </div>
        <div>
          <p>Competitive</p>
          <p>{score}</p>
        </div>
      </div>
    );
  },
});

export default connect()(Player);
