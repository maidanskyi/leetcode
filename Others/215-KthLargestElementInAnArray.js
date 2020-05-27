/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {

  const exchange = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  const partition = (start, end) => {
    let pivot = end;
    let wall = start;

    for (let i = start; i < end; i++) {
      if (nums[i] < nums[pivot]) {
        exchange(i, wall);
        wall++;
      }
    }
    exchange(wall, pivot);

    return wall;
  }

  const quickSelect = (searchPosition, start = 0, end = nums.length - 1) => {

    if (start > end) return;

    const pivot = partition(start, end);

    if (pivot === searchPosition) return nums[pivot];
    if (pivot > searchPosition)
      return quickSelect(searchPosition, start, pivot - 1);

    return quickSelect(searchPosition, pivot + 1, end);

  }

  return quickSelect(nums.length - k);

}

console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4
console.log(findKthLargest([1], 1)); // 4
