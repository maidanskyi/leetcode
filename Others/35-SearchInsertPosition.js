/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {

  let start = 0;
  let end = nums.length;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (nums[middle] === target)
      return middle;
    else if (nums[middle] < target)
      start = middle + 1;
    else
      end = middle - 1;
  }

  return start;
}

console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4
console.log(searchInsert([1,3,5,6], 0)); // 0
console.log(searchInsert([1,3], 2)); // 1
