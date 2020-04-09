/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {

  if (!nums.length) return -1;
  if (nums.length === 1) return 0;

  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {

    const rightSum = sum - nums[i] - leftSum;

    if (rightSum === leftSum)
      return i;

    leftSum += nums[i];

  }

  return -1;

}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([-1,-1,-1,-1,-1,0])); // 2
