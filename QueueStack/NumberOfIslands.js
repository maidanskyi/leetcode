/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  const rows = grid && grid.length;
  const cols = grid && grid[0] && grid[0].length;
  function setZero(i, j) {
    if (i < 0 || j < 0 || !grid[i] || !grid[i][j] || grid[i][j] === '0') {
      return;
    }
    grid[i][j] = '0';
    setZero(i, j-1);
    setZero(i-1, j);
    setZero(i, j+1);
    setZero(i+1, j);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '0') {
        continue;
      }

      count += 1;
      setZero(i, j);
    }
  }



  return count;

};
