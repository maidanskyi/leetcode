/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {

  let start = 0;
  let end = s.length - 1;
  const setCharacters = new Set([
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z', '0', '1',
    '2', '3', '4', '5', '6', '7', '8', '9'
  ]);

  while (start < end) {

    while (!setCharacters.has(s.charAt(start).toLowerCase()) && start < end) {
      start++;
    }

    while (start < end && !setCharacters.has(s.charAt(end).toLowerCase())) {
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
console.log(isPalindrome('.,')); // false
console.log(isPalindrome('0P')); // false
