/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {

  if (s.length % 2) return false;

  const closes = new Set([')', '}', ']']);

  if (closes.has(s.charAt(0))) return false;

  const opens = new Map([[')', '('], ['}', '{'], [']', '[']]);
  const stack = [];

  for (const i of s) {

    if (!closes.has(i)) {
      stack.push(i);
    } else {

      if (opens.get(i) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        break;
      }

    }

  }

  return !stack.length;

};
