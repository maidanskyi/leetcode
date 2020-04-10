/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => {

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    let temporary = s[i];
    s[i] = s[j];
    s[j] = temporary;
    i++;
    j--;
  }

  return s;

}

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // 'olleh'

