const preorderTraversal = root => {

  const stack = []

  root && stack.push(root)

  const response = []

  while (stack.length) {

    const node = stack.pop()

    response.push(node.val)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)

  }

  return response

}
