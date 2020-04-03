/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {

  const seen = new Set();
  let current = n;

  while (true) {
    if (current === 1) {
      return true;
    } else if (seen.has(current)) {
      return false;
    } else {
      seen.add(current);
      current = current
        .toString()
        .split('')
        .reduce((acc, curr) => acc + curr**2, 0);
    }
  }

}

console.log(1, isHappy(1));
console.log(2, isHappy(2));
console.log(3, isHappy(3));
console.log(4, isHappy(4));
console.log(5, isHappy(5));
console.log(6, isHappy(6));
console.log(7, isHappy(7));
console.log(8, isHappy(8));
console.log(9, isHappy(9));
console.log(10, isHappy(10));
