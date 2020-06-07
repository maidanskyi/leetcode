/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {

  const response = [];

  for (let i = 0; i < nums.length / 2; i++) {
    response.push(nums[i]);
    response.push(nums[i + n]);
  }

  return response;
}

console.log(shuffle([2,5,1,3,4,7], 3));
console.log(shuffle([1,2,3,4,4,3,2,1], 4));
console.log(shuffle([1,1,2,2], 2));
