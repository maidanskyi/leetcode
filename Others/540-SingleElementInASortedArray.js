/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums) => {

  // base cases
  if (nums.length === 1 || nums[0] !== nums[1]) return nums[0];
  if (nums[nums.length - 1] !== nums[nums.length - 2])
    return nums[nums.length - 1];

  let start = 0;
  let end = nums.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (nums[middle - 1] < nums[middle] && nums[middle] < nums[middle + 1])
      return nums[middle];

    if (nums[middle] === nums[middle - 1]) {

      if (middle % 2)
        start = middle + 1;
      else
        end = middle - 2;

    } else {

      if (middle % 2)
        end = middle - 1;
      else
        start = middle + 2;

    }

  }

  return -1;

}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8])); // 2
console.log(singleNonDuplicate([3,3,7,7,10,11,11])); // 10
