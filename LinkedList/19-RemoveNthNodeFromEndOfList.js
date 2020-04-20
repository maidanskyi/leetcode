/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {

  if (!head) return null;

  // starts from one
  let currIndex = 1;
  let curr = head;
  let node = head;

  while (curr.next) {
    if (currIndex <= n) {
      curr = curr.next;
      currIndex++;
      continue;
    }

    curr = curr.next;
    node = node.next;

  }

  if (currIndex - n === 0) {
    return head.next;
  }

  node.next = node.next.next;

  return head;

}

console.log(JSON.stringify(removeNthFromEnd({
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
        },
      },
    },
  },
}, 2)));
