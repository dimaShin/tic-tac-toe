import {
  CHECK,
  PLAY_AGAIN
} from 'constants/Actions';

/**
 * check
 * 
 * @param  {Number} id
 * @param  {Number} score
 * @return {Object}
 */
export function check(id, score) {
  return { type: CHECK, id, score };
}

/**
 * playAgain
 *
 * @return {Object}
 */
export function playAgain() {
  return { type: PLAY_AGAIN };
}
