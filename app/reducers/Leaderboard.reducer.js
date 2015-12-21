import {
  UPDATE_LEADERBOARD
} from 'constants/Actions';

import {
  DRAW,
  X, O
} from 'constants/Game';

import {
  update
} from 'services/Leaderboard';

const assign = Object.assign;

/**
 * Leaderboard
 *
 * @param  {Object} state
 * @param  {Object} action
 *
 * @return {Object}
 */
export function Leaderboard(state = { players: [] }, action) {
  switch (action.type) {

  case UPDATE_LEADERBOARD:
    return assign({}, state, {
      players: update(state.players, action.player)
    });

  default:
    return state;

  }
};