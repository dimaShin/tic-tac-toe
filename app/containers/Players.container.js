import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators as bind } from 'redux';
import Players from 'components/players/Players.react';
import * as PlayersActions from '../actions/Players.actions';

const PlayersContainer = (props) => (
  <Players {...props} />
);

export default connect(
  ({ Players, Game }) => ({
    players: Players,
    isActive: Game.isActive
  }),
  (dispatch) => bind(PlayersActions, dispatch)
)(PlayersContainer);