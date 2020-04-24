const reverseList = (head) => {
  let reversed = null;
  while (head) {
    const next = head.next;
    head.next = reversed;
    reversed = head;
    head = next;
  }
  return reversed;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {

  if (!head || !head.next) return true;

  let slow = head;
  let fast = head;
  let second;

  while (true) {

    fast = fast.next.next;

    if (!fast) {
      second = slow.next;
      break;
    }

    if (!fast.next) {
      second = slow.next.next;
      break;
    }

    slow = slow.next;

  }

  slow.next = null;

  // revers slow
  head = reverseList(head);

  while (head && second) {
    if (head.val === second.val) {
      head = head.next;
      second = second.next;
      continue;
    }
    return false;
  }

  return true;

}

console.log(isPalindrome({
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
}));
console.log(isPalindrome({
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
}));
console.log(isPalindrome({
  val: 1,
  next: {
    val: 4,
    next: {
      val: -1,
      next: {
        val: -1,
        next: {
          val: 4,
          next: {
            val: 1,
            next: null,
          },
        },
      },
    },
  },
}));
console.log(isPalindrome({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 1,
          next: null,
        },
      },
    },
  },
}));
