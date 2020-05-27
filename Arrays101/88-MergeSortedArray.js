/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {

  let finalAmountOfElements = m + n - 1;

  while (finalAmountOfElements >= 0) {

    if (m && nums1[m - 1] >= nums2[n - 1]) {
      nums1[finalAmountOfElements] = nums1[m - 1];
      m--;
    } else if (n) {
      nums1[finalAmountOfElements] = nums2[n - 1];
      n--;
    }

    finalAmountOfElements--;
  }

}

const arr = [1,5,7,0,0,0];
const arr2 = [4,6,9];
merge(arr, 3, arr2, 3);
console.log(arr); // [1,2,2,3,5,6]
