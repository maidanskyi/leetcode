/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {

  const stack = [];
  let inMemory = 0;

  while (l1) {
    stack.push(l1.val);
    l1 = l1.next;
  }

  const fn = (node) => {
    if (!node) return;
    fn(node.next);

    let value = stack.pop();
    value = value === undefined ? 0 : value;

    const num = value + inMemory + node.val;

    if (num > 9)
      inMemory = 1;
    else
      inMemory = 0;

    node.val = num % 10;
  }

  fn(l2);

  if (!stack.length) {
    return inMemory ? {val: 1, next: l2} : l2;
  }

  while (stack.length) {

    let value = stack.pop();
    value = value === undefined ? 0 : value;

    const num = value + inMemory;

    if (num > 9)
      inMemory = 1;
    else
      inMemory = 0;

    l2 = {
      val: num % 10,
      next: l2,
    }

  }

  return inMemory ? {val: 1, next: l2} : l2;

}

console.log(JSON.stringify(addTwoNumbers({
  val: 5,
  next: null,
}, {
  val: 5,
  next: null,
}))); // 10

console.log(JSON.stringify(addTwoNumbers({
  val: 7,
  next: {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 3,
        next: null,
      },
    },
  },
}, {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
}))); // 7808

console.log(JSON.stringify(addTwoNumbers({
  val: 9,
  next: {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 3,
        next: null,
      },
    },
  },
}, {
  val: 7,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
}))); // 10007
