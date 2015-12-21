import './board.scss';
import classnames from 'classnames';
import React from 'react';

/**
 * Board
 */
export default class Board extends React.Component {

  /**
   * handleClick
   *
   * @param  {Object} cell
   * @return undefined
   */
  handleClick(cell) {
    const { id, value, score } = cell;
    const { disabled, onCheck } = this.props;

    if (value || disabled) {
      return false;
    }

    onCheck(id, score);
  }

  /**
   * render
   *
   * @return {Object}
   */
  render() {
    const { disabled, data } = this.props;

    const ceils = data.map((cell) => {
      return <div
        className={ classnames('board__cell', { [`board__cell_${ cell.value }`]: cell.value }) }
        key={ cell.score }
        onClick={ this.handleClick.bind(this, cell) } />;
    });

    return (
      <div className={ classnames('board', { 'board_state-disable': disabled }) }>{ ceils }</div>
    );
  }
};