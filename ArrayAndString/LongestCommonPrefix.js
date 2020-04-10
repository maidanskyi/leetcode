/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {

  if (!strs.length) return '';

  const response = [];

  start: for (let i = 0; true; i++) {

    const char = strs[0][i];
    if (!char) break;

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) break start;
    }

    response.push(char);

  }

  return response.join('');

}

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
