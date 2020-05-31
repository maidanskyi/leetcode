/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {

  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];

  for (let i = 2; i < nums.length; i++) {
    let first = nums[i - 3] ? nums[i - 3] : 0;
    let second = nums[i - 2];

    nums[i] = Math.max(first, second) + nums[i];
  }

  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);

}

console.log(rob([1,2,3,1])); // 4
console.log(rob([2,7,9,3,1])); // 12
console.log(rob([2,1,1,2])); // 4
console.log(rob([])); // 0
console.log(rob([2])); // 2
console.log(rob([2, 1])); // 2
console.log(rob([2, 3])); // 3
