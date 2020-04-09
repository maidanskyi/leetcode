/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = nums => {

  if (!nums.length) return -1;
  if (nums.length === 1) return 0;

  let maxIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) maxIndex = i;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === maxIndex) continue;

    if (nums[i]*2 > nums[maxIndex]) return -1;
  }

  return maxIndex;

}

console.log(dominantIndex([3, 6, 1, 0])); // 1
console.log(dominantIndex([1, 2, 3, 4])); // -1
console.log(dominantIndex([1])); // 0
