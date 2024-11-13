/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
const findTargetSumWays = (nums, S) => {

  let response = 0;
  const sum = (n, nextIndex) => {

    if (nextIndex === nums.length) {
      if (n === S) response += 1;
      return;
    }

    sum(n + nums[nextIndex], nextIndex + 1);
    sum(n - nums[nextIndex], nextIndex + 1);

  }

  sum(nums[0], 1);
  sum(-nums[0], 1);

  return response;

}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 3
