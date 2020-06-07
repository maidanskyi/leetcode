/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = (coordinates) => {

  if (coordinates.length <= 2) return true;

  const fn = ([x1, y1], [x2, y2]) => ([x, y]) => {
    return (x - x1) * (y2 - y1)  === (y - y1) * (x2 - x1);
  }
  const belongToLine = fn(coordinates[0], coordinates[1]);

  for (let i = 2; i < coordinates.length; i++) {
    if (!belongToLine(coordinates[i])) return false;
  }

  return true;

}

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));
console.log(checkStraightLine([[0,0],[0,1],[0,-1]]));
