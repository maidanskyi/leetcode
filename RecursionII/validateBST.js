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
const isValidBST = (
  root,
  min = -Infinity,
  max = Infinity,
) => {
  if (!root) return true;
  if (root.val >= max || root.val <= min) return false;
  return isValidBST(root.left, min, root.val)
    && isValidBST(root.right, root.val, max);
}

const validBST = {
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 6,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
}
const invalidBST = {
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 6,
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
}

console.log('valid - ', isValidBST(validBST));
console.log('invalid - ', isValidBST(invalidBST));
