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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y) => {

  if (root.val === x || root.val === y) return false;

  const findNode = (node, target, depth) => {
    if (!node) return null;
    if (node.left && node.left.val === target || node.right && node.right.val === target)
      return [node, depth];

    return findNode(node.left, target, depth + 1)
      || findNode(node.right, target, depth + 1);
  }

  const [nodeX, depthX] = findNode(root, x, 0);
  const [nodeY, depthY] = findNode(root, y, 0);

  return nodeX !== nodeY && depthX === depthY;

}

console.log(isCousins({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 3,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: null,
  },
}, 4, 5)); // true
