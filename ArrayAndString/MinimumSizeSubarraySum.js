/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s, nums) => {

  let smallestLength = Infinity;
  let tail = 0;
  let head = 0;
  let acc = 0;

  while (head !== nums.length) {

    acc += nums[head++];

    while (acc >= s) {
      smallestLength = Math.min(smallestLength, head - tail);
      acc -= nums[tail++];
    }

  }

  return smallestLength < Infinity ? smallestLength : 0;

}

console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2
console.log(minSubArrayLen(7, [2,3,1,2,4,3,7])); // 1
console.log(minSubArrayLen(7, [2,3,1])); // 0
