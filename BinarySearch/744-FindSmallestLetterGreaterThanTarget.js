/**
 * @param {string[]} letters
 * @param {string} target
 * @return {string}
 */
const nextGreatestLetter = (letters, target) => {

  letters = [...new Set(letters)];

  if (target < letters[0] || target >= letters[letters.length - 1])
    return letters[0];

  let start = 1;
  let end = letters.length - 1;
  let middle;

  while (start < end) {
    middle = Math.floor((start + end) / 2);

    if (letters[middle - 1] <= target && letters[middle] > target)
      return letters[middle];

    if (letters[middle] > target)
      end = middle - 1;
    else
      start = middle + 1;

  }

  return letters[end];

}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a')); // c
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c')); // f
console.log(nextGreatestLetter(['c', 'f', 'j'], 'd')); // f
console.log(nextGreatestLetter(['c', 'f', 'j'], 'g')); // j
console.log(nextGreatestLetter(['c', 'f', 'j'], 'j')); // c
console.log(nextGreatestLetter(['c', 'f', 'j'], 'k')); // c

