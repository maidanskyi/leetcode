/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = (root) => {
  if (!root) return [];

  const response = [];

  const traverse = node => {
    if (!node) return;
    response.push(node.val);
    node.children.forEach(child => traverse(child));
  }

  traverse(root);

  return response;

}

console.log(preorder({
  val: 1,
  children: [
    {
      val: 3,
      children: [
        {
          val: 5, children: []
        },
        {
          val: 6, children: []
        }
      ]
    }, {
      val:2,
      children: []
    }, {
      val: 4,
      children: []
    },
  ]
}));
