/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = (arr, k, x) => {

  if (arr[0] >= x)
    return arr.slice(0, k);
  if (arr[arr.length - 1] <= x)
    return arr.slice(-k);

  while (arr.length > k) {
    if (x - arr[0] > arr[arr.length - 1] - x)
      arr.shift();
    else
      arr.pop();
  }

  return arr;

}

console.log(findClosestElements([1,2,3,4,5], 4, 3));
console.log(findClosestElements([1,2,3,4,5], 4, 3));
console.log(findClosestElements([1,1,1,10,10,10], 1, 9));
console.log(findClosestElements([0,1,1,1,2,3,6,7,8,9], 9, 4));
console.log(findClosestElements([0,0,0,1,3,5,6,7,8,8], 2, 2));
