/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {

  if (!nums.length) return null;

  const pivot = Math.floor(nums.length / 2);

  return {
    val: nums[pivot],
    left: sortedArrayToBST(nums.slice(0, pivot)),
    right: sortedArrayToBST(nums.slice(pivot + 1)),
  }

}

// console.log(sortedArrayToBST([-10,-3,0,5,9]));
// console.log(sortedArrayToBST([-1, 0, 1, 2]));
// console.log(sortedArrayToBST([0,1,2,3,4,5]));
