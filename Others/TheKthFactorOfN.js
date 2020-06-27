/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthFactor = (n, k) => {

  if (n === 1) return k === 1 ? 1 : -1;

  const factors = [];

    for (let i = 1; i <= n; i++) {
      if (n % i === 0) factors.push(i);
    }

  return factors.length < k ? -1 : factors[k - 1];

}

console.log(kthFactor(259, 3)); // -1

console.log(kthFactor(12, 3)); // 3
console.log(kthFactor(7, 2)); // 7
console.log(kthFactor(4, 4)); // -1
console.log(kthFactor(1, 1)); // 1
console.log(kthFactor(1000, 3)); // 4
