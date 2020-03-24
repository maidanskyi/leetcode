/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {

  if (!preorder.length) return null;

  if (preorder.length === 1) return {
    val: preorder[0],
    left: null,
    right: null,
  };

  const inorderMap = {};
  inorder.forEach((el, i) => {
    inorderMap[el] = i;
  });

  const preorderMap = {};
  preorder.forEach((el, i) => {
    preorderMap[el] = i;
  });

  const fn = (start, end) => {

    if (start >= end) return null;
    let index = Infinity;

    for (let i = start; i < end; i++) {
      if (preorderMap[inorder[i]] < index) index = preorderMap[inorder[i]];
    }

    return {
      val: preorder[index],
      left: fn(start, inorderMap[preorder[index]]),
      right: fn(inorderMap[preorder[index]] + 1, end),
    }

  }

  return {
    val: preorder[0],
    left: fn(0, inorderMap[preorder[0]]),
    right: fn(inorderMap[preorder[0]] + 1, inorder.length),
  }

}


/*
     3
   /   \
   9   20
      /  \
     15   7
*/
console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));
