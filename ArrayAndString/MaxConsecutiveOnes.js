/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {

  let currentLength = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === 1)
      currentLength++;
    else
      currentLength = 0;

    if (currentLength > maxLength)
      maxLength = currentLength;

  }

  return maxLength;

}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
