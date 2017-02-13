var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">OWTT</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                Get Tracker
              </IndexLink>
            </li>
            <li>
              <Link to="notes" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                Patch Notes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  },
});

module.exports = Nav;
