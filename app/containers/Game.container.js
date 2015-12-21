import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators as bind, compose } from 'redux';
import Game from 'components/game/Game.react';
import * as GameActions from '../actions/Game.actions';
import * as LeaderboardActions from '../actions/Leaderboard.actions';

const assign = Object.assign;
const GameContainer= (props) => (
  <Game {...props} />
);

export default connect(
  ({ Game }) => ({
    board: Game.board,
    isActive: Game.isActive,
    winner: Game.winner,
    players: Game.players
  }),

  (dispatch) => (
    assign({}, bind(GameActions, dispatch), bind(LeaderboardActions, dispatch))
  )
)(GameContainer);