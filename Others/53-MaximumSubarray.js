/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {

  let response;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === undefined) {
      response = nums[i];
      continue;
    }

    const sum = nums[i - 1] + nums[i];
    if (sum > nums[i]) {
      nums[i] = sum;
      if (sum > response) response = sum;
    } else {
      if (nums[i] > response) response = nums[i];
    }

  }

  return response;

}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([-2,1])); // 1
console.log(maxSubArray([-1,0,-2])); // 0
