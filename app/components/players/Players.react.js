import './players.scss';
import React from 'react';
import classnames from 'classnames';
import { X, O } from 'constants/Game';

/**
 * Players
 */
export default class Players extends React.Component {

  /**
   * constructor
   *
   * @param  {Object} props
   * @return {Object}
   */
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * handleChange
   *
   * @param  {Object} e
   * @return undefined
   */
  handleChange(e) {
    this.props.change(e.target.name, e.target.value);
  }

  /**
   * handleSubmit
   *
   * @param  {Object} e
   * @return undefined
   */
  handleSubmit(e) {
    e.preventDefault();

    const {
      play: onPlay,
      reset: onReset,
      players
    } = this.props;

    onPlay({
      [X]: players[X] || X,
      [O]: players[O] || O,
    }, true);
    onReset();
  }

  /**
   * render
   *
   * @return {Object}
   */
  render() {
    const { players } = this.props;

    return <form
        className={ classnames('players', { 'players_state-hidden': this.props.isActive }) }
        onSubmit={ this.handleSubmit.bind(this) }>

      <input
        className="players__input"
        name="X"
        value={ players[X] }
        maxLength="10"
        placeholder="X player"
        autoComplete="off"
        onChange={ this.handleChange } />

      <input
        className="players__input"
        name="O"
        value={ players[O] }
        maxLength="10"
        placeholder="O player"
        autoComplete="off"
        onChange={ this.handleChange } />

      <div className="players__control">
        <button className="button players__button" type="submit">Start game</button>
      </div>
    </form>;
  }
};