/**
 * @param {string} str
 * @return {string}
 */
const decodeString = (str) => {
  const stack = [];
  const numbers = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);

  for (let i = str.length - 1; i > -1; i--) {

    if (!numbers.has(str[i])) {
      stack.push(str[i]);
      continue;
    }

    let num = str[i];
    let s = '';

    // let's get all number's characters
    for (let k = i - 1; k > -1; k--) {
      if (numbers.has(str[k])) {
        num = str[k] + num;
        if (k === 0) {
          i = -1;
        }
      } else {
        i = k + 1;
        break;
      }
    }

    while (stack.length) {

      const char = stack.pop();

      if (char === '[') continue;
      if (char !== ']') {
        s += char;
        continue;
      }

      stack.push(s.repeat(parseInt(num)));

      break;

    }

  }

  return stack.reverse().join('');

}

console.log(decodeString('100[leetcode]')); // ;-)
console.log(decodeString('3[a]2[bc]')); // aaabcbc
console.log(decodeString('3[a10[bc]]')); // aaabcbc
console.log(decodeString('3[a2[c]]')); // accaccacc
console.log(decodeString('2[abc]3[cd]ef')); // abcabccdcdcdef
