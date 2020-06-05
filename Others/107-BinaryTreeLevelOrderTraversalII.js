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
 * @return {number[][]}
 */
const levelOrderBottom = (root) => {

  if (!root) return [];
  const queue = [root];
  const response = [];

  while (queue.length) {

    const length = queue.length;
    const res = [];
    for (let i = 0; i < length; i++) {

      const node = queue.shift();
      res.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    response.push(res);

  }

  // swap nodes
  let start = 0;
  let end = response.length - 1;

  while (start < end) {
    const temp = response[start];
    response[start] = response[end];
    response[end] = temp;
    start++;
    end--;
  }

  return response;

}
