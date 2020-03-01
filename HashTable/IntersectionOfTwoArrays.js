/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  if (!nums1.length || !nums2.length) return [];
  const setNum = new Set(nums1);
  const response = [];
  for (const key of setNum.values()) {
    if (nums2.indexOf(key) !== -1)
      response.push(key);
  }
  return response;
}

console.log(intersection([], []));
console.log(intersection([1, 2, 3, 2, 3], []));
console.log(intersection([], [6, 6, 5, 3, 1]));
console.log(intersection([3, 4, 5, 4, 5], [5, 1, 7, 4]));
