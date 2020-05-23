/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {

  if (nums.length === 1) return true;

  let finalDestination = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {

    if (i + nums[i] >= finalDestination) finalDestination = i;

  }

  return finalDestination === 0;

}

console.log(canJump([2,3,1,1,4])); // true
console.log(canJump([3,2,1,0,4])); // false
