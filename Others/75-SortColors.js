/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
const sortColors = (nums) => {

  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  let low = 0;
  let high = nums.length - 1;
  let i = 0

  while (i <= high) {

    if (nums[i] === 0)
      swap(i++, low++);
    else if (nums[i] == 2)
      swap(i, high--);
    else
      i++;

  }

};
