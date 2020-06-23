/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = (n) => {

  const ugly = [1];

  let a = 0, b = 0, c = 0;
  let factor2 = 2, factor3 = 3, factor5 = 5;

  for (let i = 1; i < n; i++) {
    const min = Math.min(Math.min(factor2,factor3),factor5);

    ugly[i] = min;

    if (factor2 === min)
      factor2 = 2 * ugly[++a];

    if (factor3 === min)
      factor3 = 3 * ugly[++b];

    if (factor5 === min)
      factor5 = 5 * ugly[++c];
  }

  return ugly[n-1];
}

console.log(nthUglyNumber(4)); // 4
console.log(nthUglyNumber(10)); // 12
console.log(nthUglyNumber(11)); // 15
