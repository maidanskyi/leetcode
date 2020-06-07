/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getStrongest = (arr, k) => {

  arr.sort((a, b) => a - b);

  const median = Math.floor((arr.length - 1) / 2);

  arr.sort((a, b) => {

    const res = Math.abs(b - arr[median]) - Math.abs(a - arr[median]);

    if (res < 0) return -1;
    if (res === 0) {
      return a - b > 0 ? -1 : 1;
    }
    if (res > 0) return 1;

  });

  return arr.slice(0, k);

}

console.log(getStrongest([1,3,2,5,4], 2)); // [5,1]
console.log(getStrongest([1,1,3,5,5], 2)); // [5,5]
console.log(getStrongest([6,7,11,7,6,8], 5)); // [11,8,6,6,7]
