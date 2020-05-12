/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n) => {

  if (n === 1) return 1;
  if (n <= 3) return 0;

  let response = 0;
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
          response++;
        else
          backtrackQueen(row + 1);

        removeQueen(row, i);

      }

    }
  }

  backtrackQueen();

  return response;

}

console.log(totalNQueens(1)); // 1
console.log(totalNQueens(2)); // 0
console.log(totalNQueens(3)); // 0
console.log(totalNQueens(4)); // 2
console.log(totalNQueens(5)); // 10
console.log(totalNQueens(6)); // 4
console.log(totalNQueens(7)); // 40
console.log(totalNQueens(8)); // 92
