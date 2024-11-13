/**
 * @param {number} n
 * @return {number}
 */
var numSquares = n => {
  const dp = new Array(n+1);
  dp.fill(n);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j*j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
    }
  }

  return dp[n];
};
