/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = (root) => {

  const response = [];
  const map = new Map();
  const set = new Set();

  // we gonna use post-order traversal
  // because in parent node we've to know
  // everything about child nodes
  const traverse = (node, position) => {

    // base case
    if (!node) return position;

    const key = traverse(node.left, 'left')
      + traverse(node.right, 'right')
      + position + node.val;


    if (!map.has(key)) {
      map.set(key, node);
    } else {

      // if the key is not in Set - that means
      // we have to add its into response
      // and into Set as well
      if (!set.has(key)) {
        response.push(node);
        set.add(key);
      }

    }

    return key;

  }

  // position - it's just a mark for
  // understanding a position of the node in the tree
  // so, is it right or left? or maybe is it a root node?
  traverse(root, 'root');

  return response;

}

console.log(findDuplicateSubtrees({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 4,
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
})); // [[2, 4], [4]]
