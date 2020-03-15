/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
const fourSumCount = (A, B, C, D) => {

  const map = new Map();
  let response = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      const key = A[i] + B[j];
      map.has(key)
        ? map.set(key, map.get(key) + 1)
        : map.set(key, 1);
    }
  }

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {

      const key = 0 - C[i] - D[j];
      const value = map.get(key);

      if (value) {
        response += value;
      }

    }
  }

  return response;

}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])); // 2
console.log(fourSumCount([-1,-1], [-1,1], [-1,1], [1,-1])); // 6
