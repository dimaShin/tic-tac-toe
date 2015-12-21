import { combineReducers } from 'redux';
import { Game } from './Game.reducer';
import { Players } from './Players.reducer';
import { Leaderboard } from './Leaderboard.reducer';

export default combineReducers({
  Game,
  Players,
  Leaderboard
});