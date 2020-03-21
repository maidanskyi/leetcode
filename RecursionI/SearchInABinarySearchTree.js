/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {

  if (!root) return null;

  const fn = (node) => {
    if (!node) return node;

    if (node.val === val) return node;

    if (node.val > val) return fn(node.left);
    if (node.val < val) return fn(node.right);
  }

  if (root.val === val) return root;
  if (root.val > val) return fn(root.left);
  if (root.val < val) return fn(root.right);

}

console.log(searchBST({
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
    left: null,
    right: null,
  },
}, 2)); // node with value 2
console.log(searchBST(null, 2)); // null
