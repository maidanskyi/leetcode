/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {

  nums.sort((a, b) => a - b);

  if (nums[nums.length-1] !== nums.length) return nums.length;
  else if (nums[0] !== 0) return 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) return nums[i] - 1;
  }

}

console.log(missingNumber([0])); // 1
console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
