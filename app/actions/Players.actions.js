import {
  CHANGE_NAME,
  PLAY,
  RESET
} from 'constants/Actions';

/**
 * change
 * 
 * @param  {String} name
 * @param  {String} value
 * @return {Object}
 */
export function change(name, value) {
  return { type: CHANGE_NAME, name, value };
}

/**
 * play
 * 
 * @param  {Number}  players
 * @param  {Boolean} isActive
 * @return {Object}
 */
export function play(players, isActive) {
  return { type: PLAY, players, isActive };
}

/**
 * reset
 * 
 * @return {Object}
 */
export function reset() {
  return { type: RESET };  
}