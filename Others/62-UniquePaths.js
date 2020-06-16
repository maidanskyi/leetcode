/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {

  const arr = [];

  arr[0] = new Array(m).fill(1);

  for (let i = 1; i < n; i++) {
    arr.push(new Array(m).fill(0));
    arr[i][0] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  return arr[n - 1][m - 1];

}

console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(7, 3)); // 28
