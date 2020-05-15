/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => {
  const isEven = n => {
    let count = 0;
    while (n >= 1) {
      n = n / 10;
      count++;
    }
    return !(count % 2);
  }

  let counter = 0;
  let response = [];

  for (let i = 0; i < nums.length; i++) {
    if (isEven(nums[i])) {
      response.push(nums[i]);
      counter++;
    }
  }

  console.log(response);
  return counter;
}

console.log(findNumbers([12,345,2,6,7896])); // 2
console.log(findNumbers([555,901,482,1771])); // 1
console.log(findNumbers([555,901,482,177])); // 0
console.log(findNumbers([555,9011,4282,1771])); // 3
