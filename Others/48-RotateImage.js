/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {

  for (const rotateElement of matrix) {
    rotateElement.reverse();
  }

  let i = 0;
  let j = matrix[0].length - 1;

  while (matrix[i] && matrix[i][j] !== undefined) {

    for (let k = 0; k < j; k++) {
      const temp = matrix[i][k];
      matrix[i][k] = matrix[matrix.length - k - 1][matrix.length - i - 1];
      matrix[matrix.length - k - 1][matrix.length - i - 1] = temp;
    }

    j--;
    i++;
  }

}

const arr = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
];
rotate(arr);
console.log(arr);
