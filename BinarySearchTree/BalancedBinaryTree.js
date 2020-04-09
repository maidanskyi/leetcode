/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = (root) => {

  if (!root) return true;

  const maxDepth = node => {
    if (!node) return 0

    const left = maxDepth(node.left)
    const right = maxDepth(node.right)

    return Math.max(left, right) + 1
  }

  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) < 2
    && isBalanced(root.left) && isBalanced(root.right);

}
