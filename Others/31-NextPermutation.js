/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums) => {
  function swap(a, b) {
    const temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }

  function reverse(start) {
    let end = nums.length - 1
    while (start < end) {
      swap(start, end)
      start++
      end--
    }
  }


  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i < 0) {
    reverse(0);
    return;
  }
  let j = nums.length - 1;
  while (j >= 0 && nums[j] <= nums[i]) {
    j--;
  }
  swap(i, j);
  reverse(i + 1);
}

const arr = [1,2,3];
nextPermutation(arr);
console.log(arr);

const arr_2 = [3,2,1];
nextPermutation(arr_2);
console.log(arr_2);

const arr_3 = [1,1,5];
nextPermutation(arr_3);
console.log(arr_3);
