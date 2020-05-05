/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {

  if (num === 1) return true;

  let start = 1;
  let end = num;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    let res = middle ** 2;

    if (res === num) return true;

    if (res > num)
      end = middle - 1;
    else
      start = middle + 1;

  }

  return false;

}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(13));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(8));
