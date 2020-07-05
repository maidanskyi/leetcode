/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = (arr) => {

  arr.sort((a, b) => a - b);

  const diff = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }

  return true;

}

console.log(canMakeArithmeticProgression([3,5,1])); // true
console.log(canMakeArithmeticProgression([1,2,4])); // false
