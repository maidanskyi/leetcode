/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {

  const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
  let currentVowelsCount = 0;
  let vowelsCount = 0;

  for (let i = 0; i < k; i++) {
    if (vowelsSet.has(s.charAt(i))) currentVowelsCount++;
    if (currentVowelsCount > vowelsCount) vowelsCount = currentVowelsCount;
  }

  if (currentVowelsCount === k) return currentVowelsCount;

  for (let i = k; i < s.length; i++) {
    if (vowelsSet.has(s.charAt(i))) currentVowelsCount++;
    if (vowelsSet.has(s.charAt(i - k))) currentVowelsCount--; // duplicate calculation!
    if (currentVowelsCount === k) return currentVowelsCount;
    if (currentVowelsCount > vowelsCount) vowelsCount = currentVowelsCount;
  }

  return vowelsCount;
}

console.log(maxVowels('abciiidef', 3)); // 3
console.log(maxVowels('aeiou', 2)); // 2
console.log(maxVowels('leetcode', 3)); // 2
console.log(maxVowels('rhythms', 4)); // 0
console.log(maxVowels('tryhard', 4)); // 1
console.log(maxVowels('zpuerktejfp', 3)); // 2
