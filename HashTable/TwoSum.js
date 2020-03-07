/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {

  const map = new Map();
  const length = nums.length;

  for (let i = 0; i < length; i++) {

    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    map.set(target - nums[i], i);

  }

}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([-3,4,3,90], 0));
