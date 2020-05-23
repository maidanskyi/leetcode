/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {

  if (!matrix.length) return [];

  const response = [];

  const spiralTraversal = (left, right, top, bottom) => {
    let k;

    // from left to right
    if (left > right || top > bottom ) return;
    for (k = left; k <= right; k++) {
      response.push(matrix[top][k]);
    }
    top++;

    // from top to bottom
    if (left > right || top > bottom ) return;
    for (k = top; k <= bottom; k++) {
      response.push(matrix[k][right]);
    }
    right--;

    // from right to left
    if (left > right || top > bottom ) return;
    for (k = right; k >= left; k--) {
      response.push(matrix[bottom][k]);
    }
    bottom--;

    // from bottom to top
    if (left > right || top > bottom ) return;
    for (k = bottom; k >= top; k--) {
      response.push(matrix[k][left]);
    }
    left++;

    // call for another nested iteration
    spiralTraversal(left, right, top, bottom);
  }

  spiralTraversal(0, matrix[0].length - 1, 0, matrix.length - 1);

  return response;

}

console.log(spiralOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
]));

console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]));
