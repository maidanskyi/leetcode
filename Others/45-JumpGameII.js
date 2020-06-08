/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {

  let jumpCount = 0;
  let maxReachable = 0;
  let maxJumpIndex = 0;
  const destination = nums.length - 1;

  for (let i = 0; i < destination; i++) {
    maxReachable = Math.max(maxReachable, i + nums[i]);

    if (maxReachable === destination) {
      jumpCount++;
      break;
    }

    if (i === maxJumpIndex) {
      jumpCount++;
      maxJumpIndex = maxReachable;
    }

  }

  return jumpCount;
}

console.log(jump([2,3,1,1,4])); // 2
console.log(jump([1])); // 0
