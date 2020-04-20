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
const oddEvenList = (head) => {

  if (!head || !head.next || !head.next.next) return head;

  let lastOdd = head;
  let firstEven = head.next;
  let lastEven = head.next;

  while (lastEven.next && lastEven.next.next) {
    lastOdd.next = lastEven.next;
    lastEven.next = lastEven.next.next;
    lastOdd = lastOdd.next;
    lastEven = lastEven.next;
  }

  if (!lastEven.next) {
    lastOdd.next = firstEven;
  } else {
    lastOdd.next = lastEven.next;
    lastEven.next = null;
    lastOdd.next.next = firstEven;
  }

  return head;

}

console.log(JSON.stringify(oddEvenList({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
})));
console.log(JSON.stringify(oddEvenList({
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
