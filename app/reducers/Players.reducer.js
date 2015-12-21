import {
  CHANGE_NAME,
  RESET
} from 'constants/Actions';

import {
  X, O
} from 'constants/Game';

const assign = Object.assign;

const initialState = {
  [X]: null,
  [O]: null
};

/**
 * Players
 *
 * @param  {Object} state
 * @param  {Object} action
 *
 * @return {Object}
 */
export function Players(state = initialState, action) {
  switch (action.type) {

  case CHANGE_NAME:
    return assign({}, state, { [action.name]: action.value });

  case RESET:
    return initialState;

  default:
    return state;

  }
};