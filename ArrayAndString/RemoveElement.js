/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {

  let last = nums.length - 1;

  while (nums[last] === val) {
    last -= 1;
  }

  if (last === -1) return 0;

  let i = 0;

  while (i < last) {
    if (nums[i] !== val) {
      i++;
      continue;
    }

    nums[i] = nums[last];
    nums[last] = val;
    last--;
    while (nums[last] === val) {
      last -= 1;
    }
    i++;
  }

  return last + 1;

}

console.log(removeElement([2,2,3], 2));
console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([3,3,3,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
