/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {

  if (board.length <= 2 || board[0].length <= 2) return;

  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const dfs = (i = 0, j = 0) => {
    if (
      !board[i]
      || !board[i][j]
      || board[i][j] !== 'O'
    ) return;

    board[i][j] = 'M';

    for (const [x, y] of directions) {
      dfs(i + x, j + y);
    }

  }

  for (let i = 0; i < board[0].length; i++) {
    // first row
    if (board[0][i] === 'O') dfs(0, i);

    // last row
    if (board[board.length - 1][i] === 'O') dfs(board.length - 1, i);
  }

  for (let i = 1; i < board.length - 1; i++) {
    // left boarder
    if (board[i][0] === 'O') dfs(i, 0);

    // right boarder
    if (board[i][board[i].length - 1] === 'O') dfs(i, board[i].length - 1);
  }

  // change not connected
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O')
        board[i][j] = 'X';
      else if (board[i][j] === 'M')
        board[i][j] = 'O';
    }
  }

}

const arr = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];
solve(arr);
console.log(arr);

const arr2 = [
  ["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],
  ["X","X","X","X","X","X","X","X","X","O","O","O","X","X","X","X","X","X","X","X"],
  ["X","X","X","X","X","O","O","O","X","O","X","O","X","X","X","X","X","X","X","X"],
  ["X","X","X","X","X","O","X","O","X","O","X","O","O","O","X","X","X","X","X","X"],
  ["X","X","X","X","X","O","X","O","O","O","X","X","X","X","X","X","X","X","X","X"],
  ["X","X","X","X","X","O","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]
];
solve(arr2);
console.log(arr2);

const arr3 = [["O","O","O"],["O","O","O"],["O","O","O"]];
solve(arr3);
console.log(arr3);
