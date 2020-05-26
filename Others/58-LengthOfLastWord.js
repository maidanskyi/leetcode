/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {

  if (!s.length) return 0;

  let lastCharacterPosition = s.length - 1;

  while (lastCharacterPosition > -1 && s.charAt(lastCharacterPosition) === ' ') {
    lastCharacterPosition--;
  }

  if (lastCharacterPosition === -1) return 0;

  let lastSpacePosition = lastCharacterPosition;

  while (lastSpacePosition > -1 && s.charAt(lastSpacePosition) !== ' ') {
    lastSpacePosition--;
  }

  return lastCharacterPosition - lastSpacePosition;

}

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('')); // 0
console.log(lengthOfLastWord('a ')); // 1
