/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = (root) => {

  let response = 0;

  const fn = (node = root, maxValue = -Infinity) => {

    if (!node) return;

    if (node.val >= maxValue) {
      response++;
      maxValue = node.val;
    }

    fn(node.left, maxValue);
    fn(node.right, maxValue);


  }

  fn();

  return response;

}

console.log(goodNodes({
  val: 3,
  left: {
    val: 1,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
})); // 4

console.log(goodNodes({
  val: 3,
  left: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: null,
})); // 3

console.log(goodNodes({
  val: 1,
  left: null,
  right: null,
})); // 1
