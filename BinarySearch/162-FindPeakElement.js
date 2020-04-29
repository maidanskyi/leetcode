/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {

  if (nums.length === 1) return 0;

  let start = 0;
  let end = nums.length - 1;
  let middle;

  while (start < end) {
    middle = Math.floor((start + end) / 2);

    if (nums[middle] > nums[middle + 1])
      end = middle;
    else
      start = middle + 1;

  }

  return start;

}

console.log(findPeakElement([1, 2])); // 1
console.log(findPeakElement([3, 2, 1])); // 0
console.log(findPeakElement([1,2,3,1])); // 2
console.log(findPeakElement([1,2,1,3,5,6,4])); // 1 || 5
