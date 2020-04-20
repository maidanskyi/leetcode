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
const reverseList = (head) => {

  let reversed = null;
  while (head) {
    const next = head.next;
    head.next = reversed;
    reversed = head;
    head = next;
  }

  return reversed;

}

console.log(JSON.stringify(reverseList({
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
})));
