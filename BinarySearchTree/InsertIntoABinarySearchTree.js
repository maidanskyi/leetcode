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
const insertIntoBST = (root, val) => {

  const addNode = node => {

    if (val < node.val && node.left) {
      return addNode(node.left);
    } else if (val < node.val && !node.left) {
      node.left = { val, left: null, right: null };
      return;
    }

    if (node.right) {
      return addNode(node.right);
    } else {
      node.right = { val, left: null, right: null };
    }

  }

  addNode(root);

  return root;

}

const tree = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: {  val: 3, left: null, right: null  },
  },
  right: { val: 7, left: null, right: null }
}

console.log(insertIntoBST(tree, 5));
