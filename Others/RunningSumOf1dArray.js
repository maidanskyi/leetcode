/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {

  if (nums.length < 2) return nums;
  let i = 1;

  while (i < nums.length) {
    nums[i] = nums[i - 1] + nums[i];
    i++;
  }

  return nums;

};

console.log(runningSum([1,2,3,4])); // [1,3,6,10]
console.log(runningSum([1,1,1,1,1])); // [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1])); // [3,4,6,16,17]
