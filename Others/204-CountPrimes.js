/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {

  const isPrime = new Array(n);
  for (let i = 2; i < n; i++) {
    isPrime[i] = true;
  }

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }

  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime[i]) count++;
  }

  return count;

}

console.log(countPrimes(2)); // 0
console.log(countPrimes(10)); // 4
