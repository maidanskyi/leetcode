/**
 * @param {number} n
 * @return {number}
 */
const numTrees = (n) => {

  const dp = [1, 1, 2];

  if (n <= 2) return dp[n];

  for (let i = 3; i <= n; i++) {
    let sum = 0;
    let a = i;

    while (a) {
      sum += dp[a - 1] * dp[i - a];
      a--;
    }

    dp[i] = sum;
  }

  return dp[n];

}

console.log(numTrees(1)); // 1
console.log(numTrees(2)); // 2
console.log(numTrees(3)); // 5
console.log(numTrees(4)); // 14
console.log(numTrees(5)); // 42
console.log(numTrees(6)); // 132

