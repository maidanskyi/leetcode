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
  const map = Object.create(null);

  for (let i = postorder.length - 1; i > -1; i--) {
    map[postorder[i]] = i;
  }

  const getNode = (start, end = inorder.length) => {

    if (start === end) return null;

    let index = 0;
    for (let i = start; i < end; i++) {
      if (index < map[inorder[i]]) index = map[inorder[i]];
    }

    return  {
      val: postorder[index],
      left: getNode(start, inorder.indexOf(postorder[index])),
      right: getNode(inorder.indexOf(postorder[index]) + 1, end),
    }

  }

  return {
    val: postorder[postorder.length - 1],
    left: getNode(0, inorder.indexOf(postorder[postorder.length - 1])),
    right: getNode(inorder.indexOf(postorder[postorder.length - 1]) + 1),
  }

}

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]));
console.log(buildTree([], []));
