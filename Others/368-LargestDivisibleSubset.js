/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  if (nums.length < 1) {
    return []
  }

  nums.sort(function (a, b) { return a-b })
  let dp = new Array(nums.length).fill(1)
  let pre = new Array(nums.length).fill(-1)
  let max = 0
  let maxIndex = 0
  dp[0] = 1

  for (let i = 1; i < nums.length; i++) {
    for (let j = i-1; j >=0 ; j--) {
      if (nums[i] % nums[j] === 0) {
        if (dp[i] < dp[j]+1) {
          dp[i] = dp[j]+1
          pre[i] = j
          if (dp[i] > max) {
            max = dp[i]
            maxIndex = i
          }
        }
      }
    }
  }

  let subset = []
  let p = maxIndex
  while(p !== -1) {
    subset.unshift(nums[p])
    p = pre[p]
  }

  return subset
};

// console.log(largestDivisibleSubset([1,2,3])); // [1,2] (of course, [1,3] will also be ok)
// console.log(largestDivisibleSubset([1,2,4,8])); // [1,2,4,8]
console.log(largestDivisibleSubset([4,8,10,240])); // [4,8,240]
