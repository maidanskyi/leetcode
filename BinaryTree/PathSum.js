const hasPathSum = (root, sum) => {

  let find = false
  const fn = (root, val = 0) => {

    if (!root) return;

    if (root.left === null && root.right === null)
      (sum === val + root.val) && (find = true)

    fn(root.left, root.val + val);
    fn(root.right, root.val + val);

  }

  fn(root);

  return find

}
