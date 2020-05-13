/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {

  if (!p && !q) return true;
  if ((!p && q) || (p && !q) || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

}

console.log(isSameTree({
  val: 1,
  left: {
    val: 3,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: null,
  }
}, {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  }
}));
