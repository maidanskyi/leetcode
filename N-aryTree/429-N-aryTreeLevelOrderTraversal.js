/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
const levelOrder = (root) => {

  if (!root) return [];

  const response = [[root.val]];
  let queue = [root];

  while (queue.length) {
    const nextQueue = [];
    const arr = [];

    while (queue.length) {
      const node = queue.shift();

      for (const child of node.children) {
        arr.push(child.val);
        nextQueue.push(child);
      }

    }

    if (arr.length) response.push(arr);
    queue = nextQueue;
  }

  return response;

}

console.log(levelOrder({
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
      children: [
        {
          val: 7, children: []
        },
        {
          val: 8, children: []
        }
      ]
    }, {
      val: 4,
      children: []
    },
  ]
})); // [[1],[3,2,4],[5,6,7,8]]
