/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {

  // base cases
  // it means linkedList is like this 1 -> null ot this 1 -> 2 -> null
  if (!head || !head.next || !head.next.next) return false;

  let slow = head;
  let fast = head.next.next;

  while (fast && slow !== fast) {

    slow = slow.next;
    if (!fast.next || !fast.next.next) {
      fast = null;
      break;
    } else if (fast.next === slow || fast.next.next === slow) {
      fast = slow;
      break;
    } else {
      fast = fast.next.next;
    }

  }

  return !!fast;

}
``
