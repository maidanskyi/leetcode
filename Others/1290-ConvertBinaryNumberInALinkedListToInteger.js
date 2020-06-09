/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = (head) => {

  const list = [];

  while (head) {
    list.push(head.val);
    head = head.next;
  }

  const str = list.join('');

  return parseInt(str, 2);

}

console.log(getDecimalValue({
  val: 1,
  next: {
    val: 0,
    next: {
      val: 1,
      next: null,
    },
  },
}));
