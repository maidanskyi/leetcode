/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const swap = (node) => {
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {

  if (!root) return root;

  swap(root);
  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  return root;
}

console.log(invertTree(null));

console.log(invertTree({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
}));
