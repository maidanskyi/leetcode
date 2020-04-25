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

  if (!l1) return l2;
  if (!l2) return l1;

  let nodeL = l1.val <= l2.val ? l1 : l2;
  let nodeB = nodeL === l1 ? l2 : l1;
  let head = nodeL;

  while (nodeL) {

    if (nodeL.next && nodeB && nodeL.next.val <= nodeB.val) {
      nodeL = nodeL.next;
      continue;
    }

    if (nodeL.next && !nodeB) break;

    if (!nodeL.next && nodeB) {
      nodeL.next = nodeB;
      break;
    }

    const temp = nodeL.next;
    nodeL.next = nodeB;
    nodeB = temp;

  }

  return head;

}

console.log(
  JSON.stringify(
    mergeTwoLists(
      {
        val: 1,
        next: {
          val: 3,
          next: {
            val: 5,
            next: null,
          }
        },
      }, {
        val: 2,
        next: {
          val: 4,
          next: {
            val: 6,
            next: {
              val: 7,
              next: null,
            },
          }
        },
      }
    )
  )
);
