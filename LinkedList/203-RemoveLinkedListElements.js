/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {

  if (!head) return head;

  // removes from the beginning all nodes with value = val
  while (head && head.val === val) {
    head = head.next;
  }

  if (!head) return head;

  let node = head;
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
      continue;
    }
    node = node.next;
  }

  return head;

}

console.log(JSON.stringify(removeElements({
  val: 3,
  next: {
    val: 3,
    next: {
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
    },
  },
}, 1)));
