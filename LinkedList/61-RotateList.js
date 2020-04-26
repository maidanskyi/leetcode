/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {

  if (!head || !head.next || !k) return head;

  let currNode = head;
  let listLength = 1;

  while (currNode.next) {
    currNode = currNode.next;
    listLength += 1;
  }

  const tail = currNode;
  const newTailIndex = k === listLength
    ? 0
    : k > listLength
      ? listLength - k % listLength
      : listLength - k;

  if (!newTailIndex || newTailIndex === listLength) return head;

  currNode = head;
  currIndex = 1;

  while (currIndex !== newTailIndex) {
    currNode = currNode.next;
    currIndex += 1;
  }

  const newHead = currNode.next;
  currNode.next = null;
  tail.next = head;

  return newHead;

}

console.log(rotateRight({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        }
      },
    },
  },
}, 10));
