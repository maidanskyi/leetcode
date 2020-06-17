/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {

  let globalMax = nums[0];
  let currentMax = nums[0];
  let currMin = nums[0];

  for (let i = 1; i < nums.length; i++) {

    const temp = currentMax;
    currentMax = Math.max(
      Math.max(nums[i], nums[i] * currentMax),
      nums[i] * currMin
    );
    currMin = Math.min(
      Math.min(nums[i], nums[i] * currMin),
      temp * nums[i]
    );

    if (currentMax > globalMax) globalMax = currentMax;

  }

  return globalMax;

}

console.log(maxProduct([2,3,-2,4])); // 6
console.log(maxProduct([-2,0,-1])); // 0
console.log(maxProduct([-2])); // -2
console.log(maxProduct([7,-2,-4])); // 56
console.log(maxProduct([-5,0,2])); // 2

