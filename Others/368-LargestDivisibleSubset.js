/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = (nums) => {

  if (!nums.length) return [];
  if (nums.length === 1) return nums;

  nums.sort((a, b) => a - b);

  const dp = new Array(nums.length).fill(1);
  const indexOfPreviousValue = new Array(nums.length).fill(-1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (!(nums[i] % nums[j])) {
        const newValue = dp[j] + 1;
        if (dp[i] < newValue) {
          dp[i] = newValue;
          indexOfPreviousValue[i] = j;
        }
      }
    }
  }

  if (nums.length === dp[dp.length - 1]) return nums;

  // find max index
  const maxSubsetCount = Math.max.apply(null, dp);
  let maxValueIndex = dp.findIndex(val => val === maxSubsetCount);
  const response = [];

  while (maxValueIndex >= 0) {
    response.push(nums[maxValueIndex]);
    maxValueIndex = indexOfPreviousValue[maxValueIndex];
  }

  return response.reverse();

}

console.log(largestDivisibleSubset([1,2,3])); // [1,2] (of course, [1,3] will also be ok)
console.log(largestDivisibleSubset([1,2,4,8])); // [1,2,4,8]
console.log(largestDivisibleSubset([4,8,10,240])); // [4,8,240]
