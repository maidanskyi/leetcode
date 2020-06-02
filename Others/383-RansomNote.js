/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {

  const map = {};

  for (const char of magazine) {
    if (map[char])
      map[char]++;
    else
      map[char] = 1;
  }

  for (const char of ransomNote) {
    if (map[char])
      map[char]--;
    else
      return false;
  }

  return true;

}

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
