/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = (path) => {

  const visited = new Set(['00']);
  const currentPoint = [0, 0];
  for (const char of path) {
    if (char === 'N')
      currentPoint[1]++;
    else if (char === 'E')
      currentPoint[0]++;
    else if (char === 'S')
      currentPoint[1]--;
    else if (char === 'W')
      currentPoint[0]--;

    if (visited.has(`${currentPoint[0]}${currentPoint[1]}`))
      return true;
    else
      visited.add(`${currentPoint[0]}${currentPoint[1]}`);

  }

  return false;

}

console.log(isPathCrossing('NES')); // false
console.log(isPathCrossing('NESWW')); // true
