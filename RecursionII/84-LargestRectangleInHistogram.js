/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = (heights) => {
  let response = 0;
  let start = 0;
  const length = heights.length;

  while (start < length) {
    let minHeight = heights[start];
    for (let i = start; i < length; i++) {

      minHeight = Math.min(minHeight, heights[i]);
      const area = minHeight * (i+1 - start);

      if (response < area)
        response = area;

    }

    start++;
  }

  return response;

}

console.log(largestRectangleArea([2]));
console.log(largestRectangleArea([1, 1]));
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
