import 'styles/main';
import React from 'react';
import GameContainer from './Game.container';
import PlayersContainer from './Players.container';
import LeaderboardContainer from './Leaderboard.container';

export default () => (
  <div className="page">
    <div className="page__left">
      <GameContainer />
    </div>

    <div className="page__right">
      <PlayersContainer />
      <LeaderboardContainer />
    </div>
  </div>
);