/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {

  const response = [];

  if (n < 1 || k > n) return response;

  const backtrack = (arr, startIterateFrom) => {
    if (arr.length === k) {
      response.push([...arr]);
      return;
    }

    for (let i = startIterateFrom; i <= n; i++) {
      arr.push(i);
      backtrack(arr, i + 1);
      arr.pop();
    }
  }

  backtrack([], 1);

  return response;

}

console.log(combine(4, 2));
