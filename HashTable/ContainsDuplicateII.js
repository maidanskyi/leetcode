/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {

  if (!nums.length) return false;

  const map = Object.create(null);
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const el = map[nums[i]];
    if (el + 1 && i - el <= k) {
      return true;
    } else {
      map[nums[i]] =  i;
    }
  }

  return false;

}

// console.log(containsNearbyDuplicate([1,2,3,1], 3)); // true
// console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false
