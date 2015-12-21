import React from 'react';
import { connect } from 'react-redux';
import Leaderboard from 'components/leaderboard/Leaderboard.react';

const LeaderboardContainer = (props) => (
  <Leaderboard {...props} />
);

export default connect(({ Leaderboard }) => ({
  players: Leaderboard.players
}))(LeaderboardContainer);