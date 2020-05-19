/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {

  const arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);

  if (arr.length % 2)
    return arr[Math.floor(arr.length / 2)];
  else
    return (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2 - 1)]) / 2;
}

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([], [1])); // 1
console.log(findMedianSortedArrays([3], [-2, -1])); // -1
