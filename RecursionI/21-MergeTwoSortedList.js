/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {

  const fn = (one, two, link = null) => {

    if (!one && !two) return link;

    if (!two && one) {
      const b = one.next
      one.next = link
      return fn(b, two, one)
    }

    if (!one && two) {
      const b = two.next
      two.next = link
      return fn(one, b, two)
    }

    if (one.val <= two.val) {
      const b = one.next
      one.next = link
      return fn(b, two, one)
    } else {
      const b = two.next
      two.next = link
      return fn(one, b, two)
    }

  }

  const reverseList = (head, link = null) => {
    if (!head) return link;

    const second = head.next;
    head.next = link;

    return reverseList(second, head);
  }

  return reverseList(fn(l1, l2));

}

// const l1 = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 4,
//       next: null,
//     }
//   }
// }
//
// const l2 = {
//   val: 1,
//   next: {
//     val: 3,
//     next: {
//       val: 4,
//       next: null,
//     }
//   }
// }
//
// console.log(JSON.stringify(mergeTwoLists(l1, l2)));
