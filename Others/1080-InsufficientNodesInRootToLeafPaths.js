/**
 * Definition for a binary tree node.
 *
 */
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @param {number} sum
 * @return {TreeNode}
 */
const sufficientSubset = (root, limit, sum = 0) => {

  if (!root) return root;
  if (!root.left && !root.right) return sum + root.val < limit ? null : root;

  root.left = sufficientSubset(root.left, limit, sum + root.val);
  root.right = sufficientSubset(root.right, limit, sum + root.val);

  return root.left === root.right ? null : root;

}

console.log(JSON.stringify(sufficientSubset({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: {
        val: 9,
        left: null,
        right: null,
      },
    },
    right: {
      val: -99,
      left: {
        val: -99,
        left: null,
        right: null,
      },
      right: {
        val: -99,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 3,
    left: {
      val: -99,
      left: {
        val: 12,
        left: null,
        right: null,
      },
      right: {
        val: 13,
        left: null,
        right: null,
      },
    },
    right: {
      val: 7,
      left: {
        val: -99,
        left: null,
        right: null,
      },
      right: {
        val: 14,
        left: null,
        right: null,
      },
    },
  },
}, 1)));

console.log(JSON.stringify(sufficientSubset({
  val: 1,
  left: {
    val: 2,
    left: {
      val: -5,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: -3,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null,
  },
}, -1)));
