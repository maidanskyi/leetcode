/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {

  if (nums.length === 0) return 0;
  if (nums.length < 4) return Math.max.apply(null, nums);

  const dp = [nums[0], nums[1]];

  // exclude last element
  for (let i = 2; i < nums.length - 1; i++) {
    dp[i] = nums[i] + Math.max(
      dp[i - 3] !== undefined ? dp[i - 3] : 0,
      dp[i - 2],
    );
  }

  // exclude first element
  nums[0] = 0;
  for (let i = 3; i < nums.length; i++) {
    nums[i] = nums[i] + Math.max(nums[i - 3], nums[i - 2]);
  }

  return Math.max(
    Math.max(dp[dp.length - 1], dp[dp.length - 2]),
    Math.max(nums[nums.length - 1], nums[nums.length - 2]),
  );

}

console.log(rob([2,3,2])); // 3
console.log(rob([1,2,3,1])); // 4
