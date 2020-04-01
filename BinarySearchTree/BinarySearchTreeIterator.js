/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
class BSTIterator {

  constructor(node) {
    this.items = [];

    const traverse = root => {
      if (!root) return

      traverse(root.left)
      this.items.push(root.val)
      traverse(root.right)
    }

    traverse(node)

  }

  /**
   * @return the next smallest number
   * @return {number}
   */
  next() {
    return this.items.shift();
  }

  /**
   * @return whether we have a next smallest number
   * @return {boolean}
   */
  hasNext() {
    return !!this.items.length;
  }

}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const obj = new BSTIterator({
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
})
const param_1 = obj.next()
const param_2 = obj.hasNext()
