/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {

  // when there is no cycle
  if (!head || !head.next) return null;

  let currNode = head;
  const set = new Set([currNode]);

  while (currNode) {

    if (!currNode.next)
      return null;

    if (set.has(currNode.next)) {
      return currNode.next;
    }

    currNode = currNode.next;
    set.add(currNode);

  }

}
