/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {

  if (!headA || !headB) return null;

  let currA = headA;
  let currB = headB;

  while (currA !== currB) {

    if (!currA.next && !currB.next) {
      currA = currB = null;
      break;
    }

    if (!currA.next) {
      currA = headB;
    } else {
      currA = currA.next;
    }

    if (!currB.next) {
      currB = headA;
    } else {
      currB = currB.next;
    }

  }

  return currA;

}
