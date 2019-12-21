var postorderTraversal = root => {

  const response = []
  const traverse = node => {

    if (!node) return

    traverse(node.left)
    traverse(node.right)
    response.push(node.val)

  }

  traverse(root)

  return response

}
