/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = (nums) => {

  const dp = [nums[0] ? 1 : 0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i]) {
      nums[i] += nums[i - 1];
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = nums[i - 1];
    }
  }

  const max = Math.max.apply(null, dp);
  return nums.length === max ? max - 1 : max;
}

console.log(longestSubarray([1,1,0,1])); // 3
console.log(longestSubarray([0,1,1,1,0,1,1,0,1])); // 5
console.log(longestSubarray([1,1,1])); // 2
console.log(longestSubarray([1,1,0,0,1,1,1,0,1])); // 4
console.log(longestSubarray([0,0,0])); // 0
