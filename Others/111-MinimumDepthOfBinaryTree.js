/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root) => {
  if (root === null) return 0;
  if (root.left === null) return minDepth(root.right) + 1;
  if (root.right === null) return minDepth(root.left) + 1;
  return Math.min( minDepth(root.left), minDepth(root.right) ) + 1;
}

console.log(minDepth({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
})); // 2

console.log(minDepth(null));
console.log(minDepth({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
}));
