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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {

  let response;
  let count = k;

  const inorderTraverse = node => {
    if (!node) return;

    inorderTraverse(node.left);
    count--;
    if (!count) response = node.val;
    if (response) return;
    inorderTraverse(node.right);
  }

  inorderTraverse(root);

  return response;

}

const obj = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 6,
    left: null,
    right: null,
  },
};

for (let i = 1; i < 7; i++) {
  console.log(i, kthSmallest(obj, i));
}
