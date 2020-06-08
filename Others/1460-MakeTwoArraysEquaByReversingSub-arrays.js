/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = (target, arr) => {

  const map = new Map();

  for (const num of target) {
    if (map.has(num))
      map.set(num, map.get(num) + 1);
    else
      map.set(num, 1);
  }

  for (const num of arr) {
    if (map.get(num) > 0)
      map.set(num, map.get(num) - 1);
    else
      return false;
  }

  return true;

}

console.log(canBeEqual([1,2,3,4,2], [2,2,4,1,3])); // true
console.log(canBeEqual([7], [7])); // true
console.log(canBeEqual([1,12], [12,1])); // true
console.log(canBeEqual([3,7,9], [3,7,11])); // false
console.log(canBeEqual([1,1,1,1,1], [1,1,1,1,1])); // true
