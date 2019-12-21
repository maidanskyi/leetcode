const levelOrder = root => {

  if (!root) return []
  const queue = [root]
  const response = []

  while (queue.length) {

    const length = queue.length
    const res = []
    for (let i = 0; i < length; i++) {

      const node = queue.shift()
      res.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    response.push(res)

  }

  return response

}
