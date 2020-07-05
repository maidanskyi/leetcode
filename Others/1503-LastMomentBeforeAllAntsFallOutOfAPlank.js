/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
const getLastMoment = (n, left, right) => Math
  .max(
    n - Math.min.apply(null, right),
    Math.max.apply(null, left)
  );

console.log(getLastMoment(4, [4,3], [0,1])); // 4
console.log(getLastMoment(7, [], [0,1,2,3,4,5,6,7])); // 7
console.log(getLastMoment(7, [0,1,2,3,4,5,6,7], [])); // 7
console.log(getLastMoment(9, [5], [4])); // 5
console.log(getLastMoment(6, [6], [0])); // 6
