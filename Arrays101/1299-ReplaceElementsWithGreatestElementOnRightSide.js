/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {

  let start = arr.length - 1;
  let maxValue = -1;

  while (start >= 0) {
    const temp = arr[start];
    arr[start] = maxValue;
    maxValue = Math.max(temp, maxValue);
    start--;
  }

  return arr;

}

console.log(replaceElements([17,18,5,4,6,1])); // [18,6,6,6,1,-1]
