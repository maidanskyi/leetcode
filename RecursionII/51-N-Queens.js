/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {

  let response = [];
  const board = [];
  for (let i = 0; i < n; board.push(new Array(n).fill('.')), i++);

  const isUnderAttack = (row, col) => {

    for (let i = 0; i < n; i++) {

      if (
        (board[row] && board[row][i] === 'Q')
        || (board[i] && board[i][col] === 'Q')
        || (board[row - i - 1] && board[row - i - 1][col - i - 1] === 'Q')
        || (board[row + i + 1] && board[row + i + 1][col + i + 1] === 'Q')
        || (board[row + i + 1] && board[row + i + 1][col - i - 1] === 'Q')
        || (board[row - i - 1] && board[row - i - 1][col + i + 1] === 'Q')
      ) return true;

    }

    return false;

  }
  const putQueen = (row, col) => board[row][col] = 'Q';
  const removeQueen = (row, col) => board[row][col] = '.';

  const backtrackQueen = (row = 0) => {
    for (let i = 0; i < n; i++) {

      if (!isUnderAttack(row, i)) {

        putQueen(row, i);

        if (row + 1 === n)
          response.push(board.map(row => row.reduce((acc, curr) => {
            return acc + curr;
          }, '')));
        else
          backtrackQueen(row + 1);

        removeQueen(row, i);

      }

    }
  }

  backtrackQueen();

  return response;

}

console.log(solveNQueens(0));
console.log(solveNQueens(1));
console.log(solveNQueens(2));
console.log(solveNQueens(3));
console.log(solveNQueens(4));
