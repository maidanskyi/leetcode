/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = tokens => {
  const operators = new Set(['+', '-', '*', '/']);
  const queue = [];
  for (const item of tokens) {
    if (!operators.has(item)) {
      queue.push(Number(item));
    } else {
      const one = queue.pop();
      const two = queue.pop();
      switch (item) {
        case '+':
          queue.push(one + two);
          break;
        case '-':
          queue.push(two - one);
          break;
        case '*':
          queue.push(one * two);
          break;
        default:
          const s = two / one;
          queue.push(s < 0 ? Math.ceil(s) : Math.floor(s));
          break;
      }
    }
  }
  return queue[0];
};
