/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {

  if (!nums.length || nums.length === k || !(k % nums.length)) return;
  if (nums.length > k) {
    k > nums.length / 2
      ? rotateFromLeftToRight(nums, nums.length - k)
      : rotateFromRightToLeft(nums, k);
  } else {
    k = k % nums.length;
    k > nums.length / 2
      ? rotateFromLeftToRight(nums, nums.length - k)
      : rotateFromRightToLeft(nums, k);
  }

}

const rotateFromLeftToRight = (nums, k) => {
  while (k) {
    const temp = nums[0];
    for (let i = 0; i < nums.length; i++) {
      nums[i] = nums[i + 1];
    }
    nums[nums.length - 1] = temp;
    k--;
  }
}
const rotateFromRightToLeft = (nums, k) => {
  while (k) {
    const temp = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
    k--;
  }
}

const arr = [1,2,3,4,5,6,7];
rotate(arr, 13);
console.log(arr);
