/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) => new Array(n)
  .fill(0)
  .map((el, index) => start + index * 2)
  .reduce((prev, curr) => {
    return prev ^ curr;
  });

console.log(xorOperation(5, 0)); // 8
console.log(xorOperation(4, 3)); // 8
console.log(xorOperation(1, 7)); // 7
console.log(xorOperation(10, 5)); // 2
