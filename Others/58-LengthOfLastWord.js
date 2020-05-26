/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  if (!s.length) return 0;
  s = s.trim();
  return s.length - 1 - s.lastIndexOf(' ');
}

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('')); // 0
console.log(lengthOfLastWord('a ')); // 1
