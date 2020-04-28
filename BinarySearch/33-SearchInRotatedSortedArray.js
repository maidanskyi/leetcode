/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {

  if (!nums || !nums.length) return -1;

  let start = 0;
  let end = nums.length - 1;
  let middle;

  if (nums[start] > nums[end]) {
    while (start <= end) {
      middle = Math.floor((start + end) / 2);

      if (nums[middle] === target) return middle;
      if (nums[middle] > nums[middle + 1]) break;
      if (nums[middle] > nums[start])
        start = middle + 1;
      else
        end = middle;
    }

    middle++;

    if (target >= nums[0]) {
      start = 0;
      end = middle - 1;
    } else {
      start = middle;
      end = nums.length - 1;
    }

  }

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) return middle;
    if (nums[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

  }

  return -1;

}

console.log(search([1], 1)); // 0
console.log(search([1, 3, 5], 1)); // 0
console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([3, 4, 5, 6, 7, 0, 1, 2], 1)); // 6
console.log(search([3, 4, 5, 6, 7, 0], 4)); // 1
console.log(search([3, 4, 5, 6, 7, 0, 1, 2], 2)); // 7
console.log(search([3, 4, 5, 6, 7, 0, 1, 2], 7)); // 4
console.log(search([0, 1, 2], 7)); // -1
console.log(search([8,9,2,3,4], 9)); // 1
