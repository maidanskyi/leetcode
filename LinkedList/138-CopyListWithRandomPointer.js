/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
const map = new Map();
/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head) => {
  if (!head) return head;

  const node = {
    val: head.val,
  };

  map.set(head, node);

  node.next = map.has(head.next)
    ? map.get(head.next)
    : copyRandomList(head.next);
  node.random = map.has(head.random)
    ? map.get(head.random)
    : copyRandomList(head.random);

  return node;

}
