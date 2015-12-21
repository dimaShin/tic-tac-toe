import './notice.scss';
import React from 'react';
import classnames from 'classnames';
import { DRAW } from 'constants/Game';

/**
 * Notice
 */
export default class Notice extends React.Component {

  /**
   * render
   *
   * @return {Object}
   */
  render() {
    const { name, onPlayAgain } = this.props;
    const message = (name === DRAW) ? `${ DRAW }!` : `player ${ name } has won!`;

    return (
      <div className={ classnames('notice', { 'notice_state-visible': name }) }>
        <p className="notice__name">{ message }</p>
        <button className="button notice__button" onClick={ onPlayAgain }>Play again</button>
      </div>
    );
  }
};