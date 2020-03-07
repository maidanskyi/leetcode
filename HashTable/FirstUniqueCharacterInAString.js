/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {

  if (!s) return -1;
  if (s.length === 1) return 0;

  const map = new Map();
  const set = new Set();
  const length = s.length;

  for (let i = 0; i < length; i++) {
    if (map.has(s[i])) {
      map.delete(s[i]);
      set.add(s[i]);
    } else {
      if (!set.has(s[i])) map.set(s[i], i);
    }
  }

  return map.size ? Math.min(...map.values()) : -1;

}

// console.log(firstUniqChar('')); // -1
// console.log(firstUniqChar('l')); // 0
// console.log(firstUniqChar('ll')); // 0
// console.log(firstUniqChar('ababbagalamaga')); // 8
// console.log(firstUniqChar('leetcode')); // 0
// console.log(firstUniqChar('loveleetcode')); // 2
