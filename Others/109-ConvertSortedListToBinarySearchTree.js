function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = (head) => {

  if (!head) return null;

  if (!head.next) return new TreeNode(head.val);

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  return new TreeNode(slow.val, sortedListToBST(head), sortedListToBST(slow.next));

}

console.log(JSON.stringify(sortedListToBST({
  val: -10,
  next: {
    val: -3,
    next: {
      val: 0,
      next: {
        val: 5,
        next: {
          val: 9,
          next: null,
        },
      },
    },
  },
})));
