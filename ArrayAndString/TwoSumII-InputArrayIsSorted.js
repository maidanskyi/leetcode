/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {

  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i]))
      return [map.get(target - numbers[i]) + 1, i + 1]

    map.set(numbers[i], i);
  }

}

console.log(twoSum([2,7,11,15], 9))

