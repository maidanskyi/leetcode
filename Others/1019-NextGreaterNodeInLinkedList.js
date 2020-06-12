/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const nextLargerNodes = (head) => {

  const listItems = [];
  while (head) {
    listItems.push(head.val);
    head = head.next;
  }

  const response = new Array(listItems.length).fill(0);
  const stack = [0];

  for (let i = 1; i < listItems.length; i++) {
    if (listItems[i] <= listItems[stack[stack.length - 1]]) {
      stack.push(i);
      continue;
    }

    while (stack.length && listItems[i] > listItems[stack[stack.length - 1]]) {
      const index = stack.pop();
      response[index] = listItems[i];
    }

    stack.push(i);

  }

  return response;

}

console.log(nextLargerNodes({
  val: 2,
  next: {
    val: 1,
    next: {
      val: 5,
      next: null,
    }
  },
})); // [5,5,0]

console.log(nextLargerNodes({
  val: 2,
  next: {
    val: 7,
    next: {
      val: 4,
      next: {
        val: 3,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
})); // [7,0,5,5,0]

console.log(nextLargerNodes({
  val: 1,
  next: {
    val: 7,
    next: {
      val: 5,
      next: {
        val: 1,
        next: {
          val: 9,
          next: {
            val: 2,
            next: {
              val: 5,
              next: {
                val: 1,
                next: null,
              },
            },
          },
        },
      },
    },
  },
})); // [7,9,9,9,0,5,0,0]
