/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
  if (!node) return node;

  const visited = new Map();
  const clone = navNode => {

    if (!visited.has(navNode.val)) {

      const clonedNode = new Node(navNode.val, []);

      visited.set(navNode.val, clonedNode);

      for (const neighbor of navNode.neighbors) {
        clonedNode.neighbors.push(clone(neighbor));
      }

      return clonedNode;

    } else {
      return visited.get(navNode.val);
    }

  }

  return clone(node);
}
