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
 * @return {number[]}
 */
const inorderTraversal = (root) => {

  if (!root) return [];

  const response = [];
  const stack = [];
  let currNode = root;

  while (currNode || stack.length) {
    while (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    }

    const node = stack.pop();
    response.push(node.val);
    currNode = node.right;

  }

  return response;

}

console.log(inorderTraversal({
  val: 1,
  left: {
    val: 4,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  }
}));
