/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {

  return [...heights]
    .sort((a, b) => a - b)
    .reduce((acc, curr, index) => {
      if (curr !== heights[index]) acc++;

      return acc;
    }, 0);

}

console.log(heightChecker([1,1,4,2,1,3]));
console.log(heightChecker([5,1,2,3,4]));
