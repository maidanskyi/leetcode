/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
  const set = new Set();

  const helper = (points = 0, pivot = 0) => {
    if (points < 0)
      return;

    if (pivot === s.length) {
      set.add(points);
      return;
    }

    if (s[pivot] === '(')
      return helper(points + 1, pivot + 1);

    if (s[pivot] === ')')
      return helper(points - 1, pivot + 1);

    helper(points, pivot + 1);
    helper(points + 1, pivot + 1);
    helper(points - 1, pivot + 1);

  }

  helper();

  return set.has(0);
}

console.log(checkValidString(')(')); // false
console.log(checkValidString('(())((())()()(*)(*()(())())())()()((()())((()))(*')); // false
console.log(checkValidString('()')); // true
console.log(checkValidString('(*)')); // true
console.log(checkValidString('(*))')); // true
console.log(checkValidString('(*)))')); // false
console.log(checkValidString('(((()))())))*))())()(**(((())(()(*()((((())))*())(())*(*(()(*)))()*())**((()(()))())(*(*))*))())')); // false
