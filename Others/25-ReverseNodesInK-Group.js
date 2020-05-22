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

  const stack = [];
  let headNode;

  const reverse = (node = head) => {

    let curr = node;
    let currHead;
    let tail;

    while (stack.length !== k && curr) {
      stack.push(curr);
      curr = curr.next;
    }

    if (stack.length !== k) return node;

    if (!headNode) headNode = stack[k - 1];
    currHead = stack[k - 1];

    for (let i = stack.length - 1; i >= 0; i-- ) {
      if (stack[i - 1])
        stack[i].next = stack[i - 1];
      else
        tail = stack[i];
    }

    stack.length = 0;
    tail.next = curr ? reverse(curr) : null;

    return currHead;

  }

  reverse();

  return headNode;

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
}, 33))); // 3 -> 2 -> 1 -> 4 -> 5
