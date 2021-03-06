import React from 'react';
import { connect } from 'react-redux';
var actions = require('actions');
var { Link, IndexLink } = require('react-router');

export class Player extends React.Component {
  render () {
    var { id, score, time, avatar, level, won, lost, healing, dispatch, damage, kills, solo, fire } = this.props;
    var diffPercent = ((won / (lost + won)) * 100).toFixed(2);
    return (
      <div className="data-cell">

        <div className="psn_holder" onClick={(nextState, replace, next) => {
          // this.props.onToggle(id);
          dispatch(actions.setPlayerAchievement(id));
        }}>
        <Link to="achievements" activeClassName="active">
          <p className="psn">{id}</p>
          <p className="player__subtext">Get Achievements</p>
          </Link>
        </div>
        <div className="psn_holder2">

          <div className="datacell" onClick={() => {
            dispatch(actions.setSortPlayers('score'));
          }}>
            <p className="psn">Competitive</p>
            <p className="stat_header">{score}</p>
          </div>

          <hr />

          <div className="datacell" onClick={() => {
            dispatch(actions.setSortPlayers('kills'));
          }}>
            <p className="psn">Kills</p>
            <p className="stat_header">{kills}</p>
          </div>

        </div>

        <div className="psn_holder2">
          <div className="datacell" onClick={() => {
            dispatch(actions.setSortPlayers('level'));
          }}>
            <p className="psn">Level</p>
            <p className="stat_header">{level}</p>
          </div>

          <hr />

          <div className="datacell" onClick={() => {
            dispatch(actions.setSortPlayers('solo'));
          }}>
            <p className="psn">Solo</p>
            <p className="stat_header">{solo}</p>
          </div>
        </div>

        <div className="psn_holder2">
          <div className="datacell" onClick={() => {
            dispatch(actions.setSortPlayers('won'));
          }}>
            <p className="psn">Won</p>
            <p className="stat_header">{won}</p>
          </div>
          <hr />

          <div className="datacell" onClick={() => {
            dispatch(actions.setSortPlayers('damage'));
          }}>
            <p className="psn">Damage</p>
            <p className="stat_header">{damage}</p>
          </div>
        </div>

        <div className="psn_holder2">
          <div className="datacell" onClick={() => {
            dispatch(actions.setSortPlayers('lost'));
          }}>
            <p className="psn">Lost</p>
            <p className="stat_header">{lost}</p>
          </div>
          <hr />
          <div className="datacell" onClick={() => {
            dispatch(actions.setSortPlayers('fire'));
          }}>
            <p className="psn">Fire</p>
            <p className="stat_header">{fire}</p>
          </div>
        </div>

        <div className="psn_holder2">
          <div className="datacell" onClick={() => {
            dispatch(actions.setSortPlayers('winPercent'));
          }}>
            <p className="psn">Win %</p>
            <p className="stat_header">{diffPercent}</p>
            </div>
            <hr />
            <div className="datacell" onClick={() => {
              dispatch(actions.setSortPlayers('healing'));
            }}>
            <p className="psn">Healing</p>
            <p className="stat_header">{healing}</p>
          </div>
        </div>

        <div className="player_right">
          <img className="psn_img" src={avatar}/>
        </div>
      </div>
    );
  }
};

export default connect()(Player);
