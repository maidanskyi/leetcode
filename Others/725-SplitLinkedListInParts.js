/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
const splitListToParts = (root, k) => {

  let length = 0;
  let head = root;

  while (head) {
    length++;
    head = head.next;
  }

  length = length < k ? k : length;

  const itemsInOneList = Math.floor(length / k);
  let longerItems = length % k;
  const response = [];
  let counter = 1;
  head = root;

  while (root) {
    if (counter < itemsInOneList) {
      root = root.next;
      counter++;
      continue;
    }

    if (longerItems) {
      root = root.next;
      longerItems--;
    }

    const next = root.next;
    root.next = null;
    response.push(head);
    head = next;
    root = next;
    counter = 1;
  }

  let diff = k - response.length;

  while (diff) {
    response.push(null);
    diff--;
  }

  return response;

}

console.log(splitListToParts(
  {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: {
                val: 7,
                next: {
                  val: 8,
                  next: {
                    val: 9,
                    next: {
                      val: 10,
                      next: null,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  3
));
