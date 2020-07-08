/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {

  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {

      if (!grid[i][j]) continue;
      if (!grid[i][j - 1]) perimeter++;
      if (!grid[i][j + 1]) perimeter++;
      if (!grid[i - 1] || !grid[i - 1][j]) perimeter++;
      if (!grid[i + 1] || !grid[i + 1][j]) perimeter++;

    }
  }

  return perimeter;

}

console.log(islandPerimeter(
  [[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]]
)); // 16
