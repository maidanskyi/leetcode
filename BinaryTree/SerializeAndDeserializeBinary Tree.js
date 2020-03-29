/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {

  if (!root) return 'X';

  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {

  const queue = data.split(',');
  const des = () => {
    const first = queue.shift();
    if (first === 'X') return null;
    const left = des();
    const right = des();
    return {
      val: Number(first),
      left,
      right,
    }
  }

  return des();

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
 *   1
 *  / \
 * 2   3
 *    / \
 *   4   5
 */
const tree = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: {
    val: 3,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
}

const serialized = serialize(tree);

console.log(serialized);
console.log(deserialize(serialized));
