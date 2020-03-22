/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {

  if (!inorder.length || !postorder.length) return null;
  const inorderMap = Object.create(null);
  const postorderMap = Object.create(null);

  inorder.forEach((el, i) => {
    inorderMap[el] = i;
  });

  postorder.forEach((el, i) => {
    postorderMap[el] = i;
  });

  const getNode = (start, end = inorder.length) => {

    if (start === end) return null;

    let index = 0;
    for (let i = start; i < end; i++) {
      if (index < postorderMap[inorder[i]]) index = postorderMap[inorder[i]];
    }

    return  {
      val: postorder[index],
      left: getNode(start, inorderMap[ postorder[index] ]),
      right: getNode(inorderMap[ postorder[index] ] + 1, end),
    }

  }

  return {
    val: postorder[postorder.length - 1],
    left: getNode(0, inorderMap[ postorder[postorder.length - 1] ]),
    right: getNode(inorderMap[ postorder[postorder.length - 1] ] + 1),
  }

}

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]));
console.log(buildTree([], []));
