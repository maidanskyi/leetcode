/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {

  if (!nums.length) return -1;
  if (nums.length === 1 && nums[0] !== target) return -1;

  let from = 0;
  let to = nums.length;
  let middle;

  while (to - from) {
    middle = Math.floor((to + from) / 2);
    if (target === nums[middle]) return middle;
    if (target < nums[middle]) {
      to = middle;
      continue;
    }
    from = middle + 1;
  }

  return -1;

}

console.log(search([-1, 0], -2));
