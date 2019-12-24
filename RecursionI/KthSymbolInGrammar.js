/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const kthGrammar = (N, K) => {

  const representation = (n, k, r) => {

    if (n === 1)
      return r;

    const median = 2 ** (n - 2);

    if (k <= median)
      return representation(n - 1, k, r);

    return representation(n - 1, k - median, 1 - r);

  }

  return representation(N, K, 0);

};

// console.log(kthGrammar(30, 300000000))
