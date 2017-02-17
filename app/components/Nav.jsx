var React = require('react');
var { Link, IndexLink } = require('react-router');
import { connect } from 'react-redux';
import moment from 'moment';

var Nav = React.createClass({

  render: function () {
    var timeDisplay;

    if (this.props.players !== 'undefined' && this.props.players.length !== 0) {
      timeDisplay = moment.unix(this.props.players[0].time).format('MM/DD/YY h:mm a');
    }else {
      timeDisplay = 'loading...';
    }

    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">OWTT</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                Tracker
              </IndexLink>
            </li>
            <li>
              <Link to="notes" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                Patch Notes
              </Link>
            </li>
            <li>
              <Link to="addPlayer" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                Add Player
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              {timeDisplay}
            </li>
          </ul>
        </div>
      </div>
    );
  },
});

export default connect(
  (state) => {
    return state;
  }
)(Nav);
