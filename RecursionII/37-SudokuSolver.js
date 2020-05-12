/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
  const isPossibleToPut = (str, row, col) => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === str || board[i][col] === str) return false;
    }

    const startRow = 3 * Math.floor(row/3);
    const startCol = 3 * Math.floor(col/3);

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === str) return false;
      }
    }

    return true;
  }
  const backtrack = (row = 0) => {
    for (let i = row; i < 9; i++) {
      for (let j = 0; j < 9; j++) {

        if (board[i][j] !== '.') continue;

        for (let k = 1; k <= 9; k++) {

          if (isPossibleToPut(`${k}`, i, j)) {
            board[i][j] = `${k}`;

            if (backtrack(i))
              return true;
            board[i][j] = '.';
          }

        }

        return false;

      }
    }
    return true;
  }

  backtrack();
}

/*
[
  ["5","3","4","6","7","8","9","1","2"],
  ["6","7","2","1","9","5","3","4","8"],
  ["1","9","8","3","4","2","5","6","7"],
  ["8","5","9","7","6","1","4","2","3"],
  ["4","2","6","8","5","3","7","9","1"],
  ["7","1","3","9","2","4","8","5","6"],
  ["9","6","1","5","3","7","2","8","4"],
  ["2","8","7","4","1","9","6","3","5"],
  ["3","4","5","2","8","6","1","7","9"]
]
*/
const arr = [ [ '5', '3', '.', '.', '7', '.', '.', '.', '.' ],
  [ '6', '.', '.', '1', '9', '5', '.', '.', '.' ],
  [ '.', '9', '8', '.', '.', '.', '.', '6', '.' ],
  [ '8', '.', '.', '.', '6', '.', '.', '.', '3' ],
  [ '4', '.', '.', '8', '.', '3', '.', '.', '1' ],
  [ '7', '.', '.', '.', '2', '.', '.', '.', '6' ],
  [ '.', '6', '.', '.', '.', '.', '2', '8', '.' ],
  [ '.', '.', '.', '4', '1', '9', '.', '.', '5' ],
  [ '.', '.', '.', '.', '8', '.', '.', '7', '9' ] ];

solveSudoku(arr);
console.log(arr);
