/**
 * @param {string} s
 * @return {number}
 */
const maxPower = (s) => {

  if (!s.length) return 0;

  let max = 0;
  let curr = 0;
  let currChar = '';

  for (const char of s) {
    if (char === currChar) {
      curr++;
    } else {
      max = max > curr ? max : curr;
      currChar = char;
      curr = 1;
    }
  }

  return max > curr ? max : curr;

}

console.log(maxPower('leetcode')); // 2
console.log(maxPower('abbcccddddeeeeedcba')); // 5
console.log(maxPower('triplepillooooow')); // 5
console.log(maxPower('hooraaaaaaaaaaay')); // 11
console.log(maxPower('tourist')); // 1
