/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {

  const results = [];
  const list = [];
  let count = 1;

  while (count <= n) {
    list.push(count++);
  }

  const backtrack = (arr, str = '') => {

    if (str.length === n) {
      results.push(str);
      return;
    }

    for (let i = 0; i < arr.length; i++) {

      if (results.length >= k) return;

      const [temp] = arr.splice(i, 1);
      str += temp;

      backtrack(arr, str);

      str = str.slice(0, -1);
      arr.splice(i, 0, temp);
    }

  }

  backtrack(list);

  return results[k - 1];

}

console.log(getPermutation(3,3)); // '213'
console.log(getPermutation(4,9)); // '2314'
