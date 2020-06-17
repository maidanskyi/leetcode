/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {

  for (let i = triangle.length - 2; i >=0; i--) {
    let j = 0;
    while (j < triangle[i].length) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
      j++;
    }
  }

  return triangle[0][0];

}

console.log(minimumTotal([
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
]));
