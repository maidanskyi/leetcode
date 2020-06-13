/**
 * @param {number[]} nums
 */
class NumArray {

  constructor(nums) {
    this.nums = nums;
    for (let i = 1; i < nums.length; i++) {
      this.nums[i] += this.nums[i - 1];
    }
  }

  /**
   * @param {number} i
   * @param {number} j
   * @return {number}
   */
  sumRange(i, j) {
    if (i) return this.nums[j] - this.nums[i - 1];
    return this.nums[j];
  }

}

const arr = new NumArray([-2,0,3,-5,2,-1]);
console.log(arr.sumRange(0,2));
console.log(arr.sumRange(2,5));
console.log(arr.sumRange(0,5));
