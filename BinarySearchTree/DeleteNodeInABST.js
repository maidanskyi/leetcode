/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = (root, key) => {

  if (!root) return root;

  // search the node
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  }
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  }

  // NODE is found
  // node is leaf
  if (!root.left && !root.right) {
    return null;
  }

  // one child (left)
  if (root.left && !root.right) {
    return root.left;
  }

  // one child (right)
  if (!root.left && root.right) {
    return root.right;
  }

  // two children
  // now we have to find max left or min right value
  // let's find the right's minimum value
  let newNode = root.right;
  while (newNode.left) {
    newNode = newNode.left;
  }

  root.val = newNode.val;
  root.right = deleteNode(root.right, newNode.val);
  return root;

}

// console.log('\n\n', deleteNode({
//   val: 5,
//   left: {
//     val: 3,
//     left: { val: 2, left: null, right: null },
//     right: { val: 4, left: null, right: null }
//   },
//   right: {
//     val: 6,
//     left: null,
//     right: { val: 7, left: null, right: null }
//   },
// }, 3));
//
// console.log('\n\n', deleteNode({
//   val: 5,
//   left: {
//     val: 3,
//     left: { val: 2, left: null, right: null },
//     right: { val: 4, left: null, right: null }
//   },
//   right: {
//     val: 6,
//     left: null,
//     right: { val: 7, left: null, right: null }
//   },
// }, 4));

console.log(deleteNode({
  val: 5,
  left: {
    val: 3,
    left: { val: 2, left: null, right: null },
    right: { val: 4, left: null, right: null }
  },
  right: {
    val: 6,
    left: null,
    right: { val: 7, left: null, right: null }
  },
}, 5));

// console.log('\n\n', deleteNode({
//   val: 5,
//   left: {
//     val: 3,
//     left: { val: 2, left: null, right: null },
//     right: { val: 4, left: null, right: null }
//   },
//   right: {
//     val: 6,
//     left: null,
//     right: { val: 7, left: null, right: null }
//   },
// }, 6));
