const isNumber = (value) => (typeof value === 'number');

/**
 * update
 *
 * @param  {Array}  players
 * @param  {String} player
 * @return {Array}
 */
export function update(players, player) {
  const assign = Object.assign;
  const result = players.slice();
  const index = players
    .map((e, index) => e.name === player ? index : null)
    .filter((e) => isNumber(e)).pop();

  if (isNumber(index)) {
    result[index] = assign({}, result[index], { value: result[index].value + 1 });
  } else {
    result.push({ name: player, value: 1});
  }

  return result.sort((a, b) => b.value - a.value);
}