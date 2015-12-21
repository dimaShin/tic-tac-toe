import {
  X, O,
  DRAW,
  BOARD_SIZE
} from 'constants/Game';

const assign = Object.assign;

export const BOARD = Array(BOARD_SIZE)
  .fill(null)
  .map((_, index) => {
    return { id: index, score: Math.pow(2, index), value: null };
  });

/**
 * isEnd
 *
 * @param  {Number} score
 * @return {Boolean}
 */
function isEnd(score) {
  const scores = [7, 56, 448, 73, 146, 292, 273, 84];

  for (let i = 0, len = scores.length; i < len; i++) {
    if ((scores[i] & score) === scores[i]) {
      return true;
    }
  }

  return false;
}

/**
 * draw
 *
 * @param  {Number} turns
 * @return {Boolean}
 */
function draw(turns) {
  return (turns === BOARD_SIZE) ? DRAW : null;
}

/**
 * onCheck
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export function onCheck(state, action) {
  if (state.winner) {
    return state;
  }

  const turn = (state.turn === X) ? O : X;
  const turns = state.turns + 1;
  const score = state[turn] + action.score;
  const winner = isEnd(score) ? state.players[turn] : draw(turns);

  return assign({}, state, {
    board: state.board.map((element) => (
      (element.id === action.id) ? assign({}, element, { value: turn }) : element
    )),

    turn,
    turns,
    winner: winner,
    [turn]: score
  });
}