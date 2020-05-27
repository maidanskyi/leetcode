/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {

  const set = new Set();

  for (const el of arr) {
    if (set.has(el*2) || set.has(el / 2))
      return true;
    set.add(el);
  }

  return false;

}

console.log(checkIfExist([10,2,5,3])); // true
console.log(checkIfExist([7,1,14,11])); // true
console.log(checkIfExist([3,1,7,11])); // false
