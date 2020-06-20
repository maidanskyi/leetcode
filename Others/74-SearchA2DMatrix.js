/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {

  if (
    matrix.length === 0
    || target < matrix[0][0]
    || target > matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1]
  ) return false;

  let start = 0;
  let end = matrix.length - 1;
  let middle;
  let row;

  // find row
  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (matrix[middle][0] <= target && matrix[middle][matrix[middle].length - 1] >= target) {
      row = middle;
      break;
    }

    if (matrix[middle][0] > target)
      end = middle - 1;
    else
      start = middle + 1;
  }

  if (row === undefined) return false;

  start = 0;
  end = matrix[row].length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (target === matrix[row][middle]) return true;

    if (target > matrix[row][middle])
      start = middle + 1;
    else
      end = middle - 1;
  }

  return false;

}

console.log(searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 3));

console.log(searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 13));
