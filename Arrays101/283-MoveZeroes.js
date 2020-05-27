/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {

  let zeroIndex = -1;
  let start = 0;

  // find zero
  while (nums.length - start) {
    if (nums[start] === 0) {
      zeroIndex = start++;
      break;
    }
    start++;
  }

  if (zeroIndex === -1) return;

  for (let i = start; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[i];
      nums[i] = 0;
      nums[zeroIndex++] = temp;
    }
  }

}

const arr = [0,1,0,3,12];
moveZeroes(arr)
console.log(arr); // [1,3,12,0,0]
