/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {

  if (!root) return null;

  let queue = [root];
  let q2 = [];

  while (queue.length) {

    const el = queue.shift();

    if (el.left) q2.push(el.left);
    if (el.right) q2.push(el.right);

    if (!queue.length) {
      el.next = null;
      queue = [...q2];
      q2 = [];
      continue;
    }

    el.next = queue[0];

  }

  return root;

}

console.log(connect({
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null, next: null },
    right: { val: 5, left: null, right: null, next: null },
    next: null
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null, next: null },
    right: { val: 7, left: null, right: null, next: null },
    next: null
  },
  next: null
}));
