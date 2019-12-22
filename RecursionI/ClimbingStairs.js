/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
  const hash = [1, 2]
  for (let i = 2; i < n; i++) {
    hash[i] = hash[i - 1] + hash[i - 2]
  }
  return hash[n-1]
}
