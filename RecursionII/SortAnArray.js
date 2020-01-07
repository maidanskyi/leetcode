/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = nums => {
  if (nums.length === 1) return nums;

  let sortedArray = [];
  const length = nums.length;

  for (let i = 0; i < length; i += 2) {
    const arr = [];

    if ( i + 1 === length) {
      arr.push(nums[i]);
    } else {

      if (nums[i] < nums[i + 1]) {
        arr.push(nums[i]);
        arr.push(nums[i + 1]);
      } else {
        arr.push(nums[i + 1]);
        arr.push(nums[i]);
      }


    }

    sortedArray.push(arr);
  }

  const merge = (left = [], right = []) => {
    const arr = [];
    let leftCursor = 0;
    let rightCursor = 0;

    while (leftCursor < left.length && rightCursor < right.length) {
      if (left[leftCursor] < right[rightCursor]) {
        arr.push(left[leftCursor]);
        leftCursor += 1;
      } else {
        arr.push(right[rightCursor]);
        rightCursor += 1;
      }
    }

    for (let i = leftCursor; i < left.length; i++) {
      arr.push(left[i])
    }

    for (let i = rightCursor; i < right.length; i++) {
      arr.push(right[i])
    }

    return arr;
  }

  while (sortedArray.length !== 1) {

    const arr = [];

    for (let i = 0; i < sortedArray.length; i += 2) {
      arr.push(merge(sortedArray[i], sortedArray[i + 1]));
    }

    sortedArray = arr;

  }

  return sortedArray[0];

};

console.log(sortArray([4, 9, 3, 1, 2, 6, 5, 3, 9, -1, -3434, 0, 100]));
