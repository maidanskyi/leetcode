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
const sumNumbers = (root) => {

  if (!root) return 0;

  let response = 0;

  const dfs = (node, path = '0') => {
    if (!node || (!node.left && !node.right)) {
      response += Number(path + node.val);
      return;
    }

    if (node.left) dfs(node.left, path + node.val);
    if (node.right) dfs(node.right, path + node.val);
  }

  dfs(root);

  return response;
}

console.log(sumNumbers(null));

console.log(sumNumbers({
  val: 1,
  left: null,
  right: null,
}));

console.log(sumNumbers({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
}));

console.log(sumNumbers({
  val: 4,
  left: {
    val: 9,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
  right: {
    val: 0,
    left: null,
    right: null,
  },
}));
