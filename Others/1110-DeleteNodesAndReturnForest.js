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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
const delNodes = (root, to_delete) => {
  if (!root) return [];

  const set = new Set(to_delete);
  const response = [];
  const dfs = node => {
    if (!node) return node;
    node.left = dfs(node.left);
    node.right = dfs(node.right);

    if (set.has(node.val)) {
      if (node.left) response.push(node.left);
      if (node.right) response.push(node.right);
      return null;
    }

    return node;
  }

  if (!set.has(root.val)) response.push(root);

  dfs(root);

  return response;
}

console.log(JSON.stringify(delNodes({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
}, [3, 5])));
console.log(JSON.stringify(delNodes({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
}, [1,2])));
