/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {

  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;

  x += '';
  let start = 0;
  let end = x.length - 1;

  while (start < end) {
    if (x[start] !== x[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;

}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(12321));
