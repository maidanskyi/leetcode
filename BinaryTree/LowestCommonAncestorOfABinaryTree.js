/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  if (!root) return null;
  if (root.val === p.val || root.val === q.val) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (!left) return right;
  if (!right) return left;

  return root;
}

const root = {
  val: 3,
  left: {
    val: 5,
    left: {val: 6, left: null, right: null},
    right: {
      val: 2,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 1,
    left: {val: 0, left: null, right: null},
    right: {val: 8, left: null, right: null}
  },
};

console.log('example 1:', lowestCommonAncestor(root, {
  val: 5,
  left: { val: 6, left: null, right: null },
  right: {
    val: 2,
    left: { val: 7, left: null, right: null },
    right: { val: 4, left: null, right: null } }
}, {
  val: 1,
  left: { val: 0, left: null, right: null },
  right: { val: 8, left: null, right: null }
})); // 3

console.log('example 2:', lowestCommonAncestor(root, {
  val: 5,
  left: { val: 6, left: null, right: null },
  right: {
    val: 2,
    left: { val: 7, left: null, right: null },
    right: { val: 4, left: null, right: null } }
}, {
  val: 4,
  left: null,
  right: null,
})); // 5
