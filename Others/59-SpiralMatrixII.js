/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {

  if (n === 0) return [];
  let value = 1;

  const matrix = new Array(n).fill(1).map(el => new Array(n).fill(1));

  const spiralTraversal = (left, right, top, bottom) => {
    let k;

    // from left to right
    if (left > right || top > bottom ) return;
    for (k = left; k <= right; k++) {
      matrix[top][k] = value++;
    }
    top++;

    // from top to bottom
    if (left > right || top > bottom ) return;
    for (k = top; k <= bottom; k++) {
      matrix[k][right] = value++;
    }
    right--;

    // from right to left
    if (left > right || top > bottom ) return;
    for (k = right; k >= left; k--) {
      matrix[bottom][k] = value++;
    }
    bottom--;

    // from bottom to top
    if (left > right || top > bottom ) return;
    for (k = bottom; k >= top; k--) {
      matrix[k][left] = value++;
    }
    left++;

    // call for another nested iteration
    spiralTraversal(left, right, top, bottom);
  }

  spiralTraversal(0, matrix[0].length - 1, 0, matrix.length - 1);

  return matrix;
}

console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(4));
