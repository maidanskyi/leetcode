/**
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = n => n % 3 !== 1;

console.log(canWinNim(4)); // false
console.log(canWinNim(5)); // true
