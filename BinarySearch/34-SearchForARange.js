/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {

  if (!nums.length) return [-1, -1];

  let start = 0;
  let end = nums.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (nums[middle-1] !== target && nums[middle] === target) break;

    if (nums[middle] === target)
      end = middle;
    else if (nums[middle] > target)
      end = middle - 1;
    else
      start = middle + 1;
  }

  if (start > end) return [-1, -1];

  let startIndex = middle;
  start = middle;
  end = nums.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (nums[middle] === target && nums[middle + 1] !== target) break;

    if (nums[middle] > target)
      end = middle;
    else
      start = middle + 1;
  }

  return [startIndex, middle];

}

console.log(searchRange([5,7,7,8,8,10], 8)); // [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6)); // [-1, -1]
