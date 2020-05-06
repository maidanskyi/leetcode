/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder = (root) => {

  if (!root) return [];

  const response = [];

  const traverse = node => {
    if (!node) return;
    for (const child of node.children) {
      traverse(child);
    }
    response.push(node.val);
  }

  traverse(root);

  return response;

}


console.log(postorder({
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
})); // [5,6,3,2,4,1]
