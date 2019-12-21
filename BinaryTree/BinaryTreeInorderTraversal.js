const inorderTraversal = root => {

  const response = []
  const traverse = node => {

    if (!node) return

    traverse(node.left)
    response.push(node.val)
    traverse(node.right)

  }

  traverse(root)

  return response

}
