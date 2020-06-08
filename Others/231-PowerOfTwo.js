/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {

  if (n < 1) return false;
  if (n === 1) return true;

  let power = 0;
  let result = Math.pow(2, power);

  while (result < n) {
    power++;
    result = Math.pow(2, power);
  }

  return n === result;

}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(218)); // false
console.log(isPowerOfTwo(256)); // true
