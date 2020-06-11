/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
const numComponents = (head, G) => {

  if (G.length === 1) return 1;

  let count = 0;
  const set = new Set(G);

  while (head) {
    if (!set.has(head.val)) {
      head = head.next;
      continue;
    }

    while (head && set.has(head.val)) {
      head = head.next;
    }

    count++;

  }

  return count;

}

console.log(numComponents(
  {
    val: 0,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    },
  },
  [0,1,3]
)); // 2

console.log(numComponents(
  {
    val: 0,
    next: {
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
    },
  },
  [0,3,1,4]
)); // 2
