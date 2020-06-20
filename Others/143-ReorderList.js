/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {

  const hash = [];
  let node = head;

  while (node) {
    const temp = node;
    node = node.next;
    temp.next = null;
    hash.push(temp);
  }

  let start = 1;
  let end = hash.length - 1;
  let flag = true;

  while (start <= end) {
    if (flag) {
      head.next = hash[end];
      head = head.next;
      end--;
      flag = !flag;
    } else {
      head.next = hash[start];
      head = head.next;
      start++;
      flag = !flag;
    }
  }

}

const list = {
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
};

reorderList(list);
console.log(JSON.stringify(list)); // 1 -> 5 -> 2 -> 4 -> 3
