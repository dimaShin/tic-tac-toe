import {
  X, O
} from 'constants/Game';

import {
  BOARD,
  onCheck
} from 'services/Game';

import {
  CHECK,
  PLAY,
  PLAY_AGAIN
} from 'constants/Actions';

const assign = Object.assign;

const initialState = {
  board: BOARD,

  isActive: false,
  winner: null,
  turn: null,
  turns: 0,

  players: {},

  [X]: 0,
  [O]: 0
};

/**
 * Game
 *
 * @param  {Object} state
 * @param  {Object} action
 *
 * @return {Object}
 */
export function Game(state = initialState, action) {
  switch (action.type) {

  case CHECK:
    return assign({}, state, onCheck(state, action));

  case PLAY:
    return assign({}, state, {
      players: action.players,
      isActive: action.isActive
    });

  case PLAY_AGAIN:
    return assign({}, initialState, {
      players: state.players,
      [X]: 0,
      [O]: 0
    });

  default:
    return state;
  }
};