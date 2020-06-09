/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {

  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
      tIndex++;
      continue;
    }

    tIndex++;
  }

  return sIndex === s.length;

}

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
