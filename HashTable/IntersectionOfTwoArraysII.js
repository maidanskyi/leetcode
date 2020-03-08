/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {

  if (!nums1.length || !nums2.length) return [];

  const map = nums1.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, Object.create(null));

  return nums2.filter((el) => {
    if (map[el]) {
      map[el]--;
      return true;
    }
  });

}

// console.log(intersect([1, 2, 2, 1], [])); // []
// console.log(intersect([], [2, 2])); // []
// console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
// console.log(intersect([4, 9, 5, 4], [9, 4, 9, 8, 4])); // [4, 4, 9]
// console.log(intersect([8, 0, 3], [0, 0])); // [0]
