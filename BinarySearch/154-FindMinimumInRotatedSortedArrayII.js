/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {

  while (nums[0] === nums[nums.length - 1] && nums.length > 1 ) nums.length--;

  if (nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0];

  let start = 1;
  let end = nums.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (nums[middle - 1] > nums[middle]) return nums[middle];

    if (nums[middle] > nums[nums.length - 1])
      start = middle + 1;
    else
      end = middle - 1;

  }

  return nums[middle];

}

console.log(findMin([1,3,5])); // 1
console.log(findMin([2,2,2,0,1])); // 0
console.log(findMin([1,1])); // 1
console.log(findMin([10,10,10,1,10])); // 1
console.log(findMin([3,1,3,3])); // 1
console.log(findMin([2,0,1,1,1])); // 0
