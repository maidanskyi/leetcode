/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {

  if (k === 1) return head;

  const reverse = (node, count) => {

    let previous = null;
    let curr = node;
    let next;
    let nodesCount = 1;

    while (count - nodesCount && curr) {
      curr = curr.next;
      nodesCount++;
    }

    if (!curr) return node;

    curr = node;
    while (count) {
      next = curr.next;
      curr.next = previous;
      previous = curr;
      curr = next;
      count--;
    }

    node.next = reverse(curr, k);

    return previous;

  }

  return reverse(head, k);

}

console.log(JSON.stringify(reverseKGroup({
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
}, 1))); // 1 -> 2 -> 3 -> 4 -> 5

console.log(JSON.stringify(reverseKGroup({
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
}, 2))); // 2 -> 1 -> 4 -> 3 -> 5

console.log(JSON.stringify(reverseKGroup({
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
}, 3))); // 3 -> 2 -> 1 -> 4 -> 5
