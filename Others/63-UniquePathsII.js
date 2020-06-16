/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {

  if (obstacleGrid[0][0]) return 0;

  // set initial path horizontally
  for (let i = 0; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === 1 || obstacleGrid[0][i - 1] === 0)
      obstacleGrid[0][i] = 0;
    else
      obstacleGrid[0][i] = 1;
  }

  // set initial path vertically
  for (let i = 1; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 1 || obstacleGrid[i - 1][0] === 0)
      obstacleGrid[i][0] = 0;
    else
      obstacleGrid[i][0] = 1;
  }

  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {

      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
        continue;
      }

      obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];

    }
  }

  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];

}

console.log(uniquePathsWithObstacles([
  [1],
  [0]
]));
console.log(uniquePathsWithObstacles([
  [0,0,0],
  [0,1,0],
  [0,0,0]
]));
