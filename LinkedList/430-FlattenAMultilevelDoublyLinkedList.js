/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

const travers = node => {

  while (node) {

    if (node.child) {
      const next = node.next;
      node.next = node.child;
      node.child.prev = node;
      node.child = null;
      node = node.next;
      const lastNode = travers(node);
      lastNode.next = next;
      if (next) {
        next.prev = lastNode;
      }
      node = lastNode;
    }

    if (!node.next)
      break;

    node = node.next;

  }

  return node;

}

/**
 * @param {Node} head
 * @return {Node}
 */
const flatten = (head) => {
  if (!head) return head;
  travers(head);
  return head;
}
