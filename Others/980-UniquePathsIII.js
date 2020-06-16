/**
 * @param {number[][]} grid
 * @return {number}
 */
const uniquePathsIII = (grid) => {

  let obstacleCount = 0;
  let start;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) start = [i, j];
      if (grid[i][j] === -1) obstacleCount++;
    }
  }

  const pathLength = grid.length * grid[0].length - obstacleCount;
  let count = 0;
  let directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];

  const backtrack = (i, j, steps = 1) => {

    if (
      !grid[i]
      || grid[i][j] === undefined
      || grid[i][j] === -1
      || grid[i][j] === 'V'
    ) return;

    if (grid[i][j] === 2 && steps === pathLength) {
      count++;
      return;
    }

    for (const [x, y] of directions) {
      const temp = grid[i][j];
      grid[i][j] = 'V';
      backtrack(i + x, j + y, steps + 1);
      grid[i][j] = temp;
    }

  }

  backtrack(start[0], start[1]);

  return count;

}

console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]])); // 2
console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]])); // 4
console.log(uniquePathsIII([[0,1],[2,0]])); // 0
