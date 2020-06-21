/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = (dungeon) => {

  const row = dungeon.length - 1;
  const col = dungeon[0].length - 1;

  dungeon[row][col] = dungeon[row][col] > 0 ? 1 : 1 - dungeon[row][col];

  for (let i = row - 1; i >= 0; i--) {
    dungeon[i][col] = Math.max(dungeon[i + 1][col] - dungeon[i][col], 1);
  }

  for (let i = col - 1; i >= 0; i--) {
    dungeon[row][i] = Math.max(dungeon[row][i + 1] - dungeon[row][i], 1);
  }

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      dungeon[i][j] = Math.min(
        Math.max(dungeon[i + 1][j] - dungeon[i][j], 1),
        Math.max(dungeon[i][j + 1] - dungeon[i][j], 1),
      );
    }
  }

  return dungeon[0][0];

}

console.log(calculateMinimumHP([
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
]));
