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

  let first = head;
  let second = head;
  let listLength = 1;
  let askedK = k;

  // let's find a list length or a specific element that is a new tail
  while (first.next) {

    first = first.next;
    k--;
    listLength++;

    if (k >= 0) continue;

    second = second.next;

  }

  if (askedK - listLength === 0) return head;
  if (askedK - listLength < 0) {
    const newHead = second.next;
    second.next = null;
    first.next = head;
    return newHead;
  }

  return rotateRight(head, askedK % listLength);

}

console.log(JSON.stringify(
  rotateRight({
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
  }, 7)
));
