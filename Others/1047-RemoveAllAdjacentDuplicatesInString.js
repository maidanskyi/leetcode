/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = (S) => {

  const stack = [];

  for (const char of S) {
    if (stack[stack.length - 1] === char)
      stack.pop();
    else
      stack.push(char);
  }

  return stack.join('');

}

console.log(removeDuplicates('abbaca')); // 'ca'
