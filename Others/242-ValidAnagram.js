/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {

  const map = {};

  for (const char of s) {
    if (!map[char])
      map[char] = 1;
    else
      map[char]++;
  }

  for (const char of t) {
    if (!map[char] || --(map[char]) < 0) return false;
    if (!map[char]) delete map[char];
  }

  return !Object.keys(map).length;

}

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('ab', 'a')); // false
