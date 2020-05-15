/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {

  if (!nums.length) return 0;

  let currentIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[currentIndex])
      nums[++currentIndex] = nums[i];
  }

  return currentIndex + 1;

}

const arr = [1, 1, 2];
console.log(removeDuplicates(arr));
console.log(arr);

const arr2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(arr2));
console.log(arr2);
