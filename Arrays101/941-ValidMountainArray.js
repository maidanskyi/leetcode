/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = (arr) => {
  if (arr.length < 3) return false;

  let start = 0;

  // go up
  while (arr[start] < arr[start + 1]) {
    start++;
  }

  if (!start || start === arr.length - 1) return false;

  // go down
  while (arr[start] > arr[start + 1]) {
    start++;
  }

  return start === arr.length - 1;

}

console.log(validMountainArray([2,1])); // false
console.log(validMountainArray([3,5,5])); // false
console.log(validMountainArray([0,3,2,1])); // true
