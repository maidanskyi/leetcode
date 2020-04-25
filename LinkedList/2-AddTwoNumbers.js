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
const addTwoNumbers = (l1, l2) => {

  let num = 0;
  let currL1 = l1;
  let currL2 = l2;

  while (currL1 && currL2) {
    const sum = currL1.val + currL2.val + num;

    num = Math.trunc(sum / 10);
    currL1.val = sum % 10;

    if (!currL1.next && !currL2.next && num) {
      currL1.next = {
        val: num,
        next: null,
      }
      num = 0;
    }

    if (!currL1.next && currL2.next) {
      currL1.next = currL2.next;
      currL1 = currL1.next;
      currL2 = null;
      break;
    }

    currL1 = currL1.next;
    currL2 = currL2.next;

  }

  while (currL1) {

    const sum = currL1.val + num;
    num = Math.trunc(sum / 10);
    currL1.val = sum % 10;

    if (num && !currL1.next) {
      currL1.next = {
        val: 1,
        next: null,
      }
      break;
    }

    currL1 = currL1.next;

  }

  return l1;

}

console.log(addTwoNumbers({
  val: 5,
  next: null,
}, {
  val: 5,
  next: null,
}));

console.log(addTwoNumbers({
  val: 0,
  next: null,
}, {
  val: 7,
  next: {
    val: 3,
    next: null,
  },
}));

console.log(addTwoNumbers({
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    }
  }
}, {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    }
  }
}));
console.log(JSON.stringify(
  addTwoNumbers({
    val: 9,
    next: {
      val: 4,
      next: {
        val: 9,
        next: null,
      }
    }
  }, {
    val: 2,
    next: {
      val: 7,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: null,
          }
        },
      }
    }
  })
));
