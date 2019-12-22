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
const reverseList = (head, link = null) => {
  if (!head) return link;

  const second = head.next;
  head.next = link;

  return reverseList(second, head);
}

// const list = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: null,
//       },
//     },
//   },
// }
//
// console.log(JSON.stringify(reverseList(list)));
