/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if(!matrix || matrix.length === 0) return false;

  let row=0;
  let col=matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if(target > matrix[row][col])
      row++;
    else if (target < matrix[row][col])
      col--;
    else
      return true;
  }
  return false;
}

const matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

console.log(searchMatrix(matrix, 5))
console.log(searchMatrix(matrix, 20))
