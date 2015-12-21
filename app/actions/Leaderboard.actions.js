import {
  UPDATE_LEADERBOARD
} from 'constants/Actions';

/**
 * updateLeaderboard
 *
 * @param {String} player
 *
 * @return {Object}
 */
export function updateLeaderboard(player) {
  return { type: UPDATE_LEADERBOARD, player };
}