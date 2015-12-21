import './leaderboard.scss';
import React from 'react';
import classnames from 'classnames';
import Score from 'components/score/Score.react';

/**
 * Leaderboard
 */
export default class Leaderboard extends React.Component {

  /**
   * render
   *
   * @return {Object}
   */
  render() {
    const { players } = this.props;
    const scores = players.map((player, index) => (
      <Score key={ index } name={ player.name } value={ player.value } />
    ));
    const NO_RESULTS = <p className="leaderboard__no-results">no results</p>;

    return (
      <div className="leaderboard">
        <p className="leaderboard__title">Leaderboard</p>
        { players.length ? scores : NO_RESULTS }
      </div>
    );
  }
};