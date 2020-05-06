/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
const maxDepth = (root) => {

  if (!root) return 0;

  const responses = [];

  for (let i = 0; i < root.children.length; i++) {
    responses[i] = maxDepth(root.children[i]);
  }

  return Math.max.apply(null, responses.length ? responses : [0]) + 1;

}

console.log(maxDepth({
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
