/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {

  if (nums.length === 1) return nums[0];
  if (nums[0] < nums[nums.length - 1]) return nums[0];

  let start = 0;
  let end = nums.length - 1;
  let middle;

  while (start < end) {
    middle = Math.floor((start + end) / 2);

    if (nums[middle] > nums[middle + 1])
      return nums[middle + 1];

    if (nums[middle] > nums[start])
      start = middle + 1;
    else
      end = middle;
  }

  return nums[middle];

}

console.log(findMin([3,4,5,1,2])); // 1
console.log(findMin([4,5,6,7,0,1,2])); // 0
console.log(findMin([2,4,5,6])); // 2
console.log(findMin([0,1,2,4,-1])); // -1
