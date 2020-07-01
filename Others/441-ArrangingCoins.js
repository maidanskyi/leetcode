/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {

  if (n < 1) return 0;

  let count = 1;
  let column = 0;

  while (n >= count) {
    n -= count;
    column++;
    count++;
  }

  return column;

}

console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3
