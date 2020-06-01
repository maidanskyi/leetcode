/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {

  let power = 0;
  let val = 3 ** power;

  while (val <= n) {
    if (val === n) return true;
    val = 3 ** ++power;
  }

  return false;

}

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(1)); // true
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(45)); // false
