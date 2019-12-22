/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
  const hash = [0, 1, 2]
  for (let i = 3; i < n + 1; i++) {
    hash[i] = hash[i - 1] + hash[i - 2]
  }
  return hash[n]
}
