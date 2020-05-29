/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {

  let start = 0;
  let end = s.length - 1;

  while (start < end) {

    while (
      (
        (s.charAt(start).toLowerCase().charCodeAt(0) < 48 || s.charAt(start).toLowerCase().charCodeAt(0) > 57)
        && (s.charAt(start).toLowerCase().charCodeAt(0) < 97 || s.charAt(start).toLowerCase().charCodeAt(0) > 122)
      )
      && start < end
    ) {
      start++;
    }

    while (
      start < end && (
        (s.charAt(end).toLowerCase().charCodeAt(0) < 48 || s.charAt(end).toLowerCase().charCodeAt(0) > 57)
        && (s.charAt(end).toLowerCase().charCodeAt(0) < 97 || s.charAt(end).toLowerCase().charCodeAt(0) > 122)
      )) {
      end--;
    }

    if (s.charAt(start).toLowerCase() !== s.charAt(end).toLowerCase()) return false;
    start++;
    end--;

  }

  return true;

}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome('.,')); // true
console.log(isPalindrome('0P')); // false
