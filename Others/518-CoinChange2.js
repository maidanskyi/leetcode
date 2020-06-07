/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const N = coins.length

  const DP = Array(amount + 1).fill(0)

  DP[0] = 1

  for (const coin of coins) {
    for (let col = coin; col <= amount; col++) {
      DP[col] += DP[col - coin]
    }
  }

  return DP[amount]
}

/* My solution - problem with leetcode tests
const hash = {};
const change = (amount, coins, key = []) => {
  if (amount < 0) return 0;
  if (amount === 0) {
    key.sort((a, b) => a - b);
    const k = key.join('');
    if (hash[k]) {
      return 0;
    } else {
      hash[k] = true;
      return 1;
    }
  }

  const response = [];
  for (let i  = 0; i < coins.length; i++) {
    key.push(coins[i]);
    response[i] = change(amount - coins[i], coins, key);
    key.pop();
  }

  return response.reduce((acc, curr) => acc + curr, 0);
}

console.log(change(5, [2,5]));
*/
