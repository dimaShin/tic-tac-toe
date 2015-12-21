import './game.scss';
import classnames from 'classnames';
import React from 'react';
import Board from 'components/board/Board.react';
import Notice from 'components/notice/Notice.react';
import {
  DRAW,
  GAME_TITLE
} from 'constants/Game';

/**
 * Game
 */
export default class Game extends React.Component {

  /**
   * componentWillReceiveProps
   *
   * @param  {Object} props
   * @return undefined
   */
  componentWillReceiveProps(props) {
    const {
      winner,
      updateLeaderboard
    } = props;

    if (winner && winner !== DRAW) {
      updateLeaderboard(winner);
    }
  }

  /**
   * render
   *
   * @return {Object}
   */
  render() {
    const {
      board,
      isActive,
      winner,
      check: onCheck,
      playAgain: onPlayAgain
    } = this.props;

    const disabled = !isActive || winner;

    return (
      <div className="game">
        <div className={ classnames('game__title', { 'game__title_state-hidden': isActive }) }>
          { GAME_TITLE }
        </div>
        <Notice name={ winner } onPlayAgain={ onPlayAgain } />
        <Board data={ board } onCheck={ onCheck } disabled={ disabled } />
      </div>
    );
  }
}