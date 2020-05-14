/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {

  if (!digits.length) return [];
  const response = [];
  const length = digits.length;
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const fn = (position = 0, base = '') => {

    if (position === length) {
      response.push(base);
      return;
    }

    const str = map[digits[position]];
    for (const char of str) {
      fn(position+1, base + char);
    }

  }

  fn();

  return response;

}

console.log(letterCombinations('23'));
