/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {

  const sorted = nums.sort((a, b) => a - b);
  let response = 0;

  for (let i = 0; i < sorted.length - 1; i += 2) {
    response += sorted[i];
  }

  return response;

}

console.log(arrayPairSum([1,4,3,2]));
console.log(arrayPairSum([1,10,3,12]));
