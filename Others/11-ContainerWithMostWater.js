/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {

  let response = 0;
  let start = 0;
  let end  = height.length - 1;

  while (start < end) {
    const area = Math.min(height[start], height[end]) * (end - start);
    response = response > area ? response : area;

    if (height[start] >= height[end]) {
      while (start < end) {
        end--;
        if (height[end] > height[end + 1]) break;
      }
    } else {
      while (start < end) {
        start++;
        if (height[start - 1] < height[start]) break;
      }
    }
  }

  return response;

}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
