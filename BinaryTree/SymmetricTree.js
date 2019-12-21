const isSymmetric = root => {

  if (!root) return true;

  const queue = [root];
  let response = true;

  theEnd: while (queue.length) {

    const arr = []
    const length = queue.length

    for (let i = 0; i < length; i++) {
      const node = queue.shift()

      if (node.left) {
        queue.push(node.left)
        arr.push(node.left.val)
      }
      if (node.left === null) {
        arr.push(null)
      }

      if (node.right) {
        queue.push(node.right)
        arr.push(node.right.val)
      }
      if (node.right === null) {
        arr.push(null)
      }

    }

    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] !== arr[arr.length - (i + 1)]) {
        response = false
        break theEnd
      }
    }

  }

  return response;

}
