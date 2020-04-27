/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = (n) => {

  let start = 1;
  let end = n;
  let middle;
  let answer;

  while (true) {
    middle = Math.ceil((start + end) / 2);
    answer = guess(middle);

    if (answer === 0) return middle;

    if (answer === -1)
      end = middle - 1;
    else
      start = middle + 1;

  }

}
