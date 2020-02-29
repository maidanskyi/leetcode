/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  const setwithOneElement = nums.reduce((acc, curr) => {
    if (acc.has(curr))
      acc.delete(curr);
    else
      acc.add(curr);

    return acc;
  }, new Set());
  const [value] = Array.from(setwithOneElement.keys());
  return value;
}

// console.log(singleNumber([2, 2, 1]));
