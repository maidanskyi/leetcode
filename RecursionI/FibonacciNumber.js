/**
 * @param {number} n
 * @return {number}
 */
const fib = n => {
  const hash = new Map()
  const fb = num => {
    if (hash.has(num)) return hash.get(num)
    let result;
    if (num < 2)
      result = num
    else
      result = fb(num - 1) + fb(num - 2)
    hash.set(num, result)
    return result
  }

  return fb(n)
}
