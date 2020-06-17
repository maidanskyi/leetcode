/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {

  if (triangle.length === 1) return triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    let j = 0;

    while (j < triangle[i].length) {

      triangle[i][j] += Math.min(
        triangle[i - 1][j - 1] !== undefined
          ? triangle[i - 1][j - 1]
          : Infinity,
        triangle[i - 1][j] !== undefined
          ? triangle[i - 1][j]
          : Infinity
      );

      j++;

    }
  }

  console.log(triangle);

  return Math.min.apply(null, triangle[triangle.length - 1]);

}

console.log(minimumTotal([
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
]));
