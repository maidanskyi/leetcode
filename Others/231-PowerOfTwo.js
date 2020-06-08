/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  return Math.log2(n)%1 === 0;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(218)); // false
console.log(isPowerOfTwo(256)); // true
