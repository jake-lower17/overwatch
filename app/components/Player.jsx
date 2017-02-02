var React = require('react');
var { connect } = require('react-redux');
var moment = require('moment');

var Player = React.createClass({
  render: function () {
    var { id, score, time } = this.props;
    var formatedTime = moment.unix(time).format('MMM Do YYYY h:mm a')
    return (
      <div>
        <h3>{id}</h3>
        <p>{score}</p>
        <p>{formatedTime}</p>
      </div>
    );
  },
});

export default connect()(Player);
