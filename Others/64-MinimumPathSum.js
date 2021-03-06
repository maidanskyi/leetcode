/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {

  for (let i = 1; i < grid[0].length; i++) {
    grid[0][i] = grid[0][i] + grid[0][i - 1];
  }

  for (let i = 1; i < grid.length; i++) {
    grid[i][0] = grid[i][0] + grid[i - 1][0];
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];

}

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]));
