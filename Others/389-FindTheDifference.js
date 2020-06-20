/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const findTheDifference = (s, t) => {
  const map = new Map();

  for (const char of s) {
    if (map.has(char))
      map.set(char, map.get(char) + 1);
    else
      map.set(char, 1);
  }

  for (const char of t) {
    if (!map.get(char))
      return char;
    else
      map.set(char, map.get(char) - 1);
  }

}

console.log(findTheDifference('abcd', 'abcde')); // 'e'
console.log(findTheDifference('a', 'aa')); // 'a'