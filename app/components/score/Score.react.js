import './score.scss';
import React from 'react';

/**
 * Score
 *
 * @param  {Object} props
 * @return {Object}
 */
export default (props) => (
  <div className="score">
    <span className="score__name">{ props.name }</span>
    <span className="score__value">{ props.value }</span>
  </div>
);