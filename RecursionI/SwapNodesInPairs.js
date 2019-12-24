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
const swapPairs = head => {

  if (!head || !head.next)
    return head;

  const c = head.next.next;
  const b = head.next;
  b.next = head;
  b.next.next = swapPairs(c);
  return b;

}

/*
const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null,
          },
        },
      },
    },
  },
}

console.log(JSON.stringify(swapPairs(list)));
*/
