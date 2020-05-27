/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {

  const findPositionForElement = (target) => {

    let start = 0;
    let end = m;
    let middle;

    while (start < end) {

      middle = Math.floor((start + end) / 2);

      if (nums1[middle] <= target && nums1[middle + 1] > target) return middle + 1;

      if (nums1[middle] >= target)
        end--;
      else
        start++;

    }

    return start;

  }
  const insertElementAtPosition = (position, element) => {
    for (let i = m; i > position; i--) {
      nums1[i] = nums1[i - 1];
    }

    nums1[position] = element;
  }

  if (nums2[n - 1] <= nums1[0]) {
    for (let i = 0; i < n; insertElementAtPosition(i, nums2[i]), m++, i++);
    return;
  }

  if (nums2[0] >= nums1[m - 1]) {
    for (let i = 0; i < n; insertElementAtPosition(m + i, nums2[i]), i++);
    return;
  }

  for (let i = 0; i < n; insertElementAtPosition(findPositionForElement(nums2[i]), nums2[i]), i++, m++);

}

const arr = [1,5,7,0,0,0];
const arr2 = [4,6,9];
merge(arr, 3, arr2, 3);
console.log(arr); // [1,2,2,3,5,6]
