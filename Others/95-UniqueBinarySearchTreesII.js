class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = (n) => {
  if (n < 1) return [];

  const generateTree = (from, to) => {
    if (from > to) return [null];

    const response = [];

    for (let i = from; i <= to; i++) {
      for (let rightNode of generateTree(i + 1, to)) {
        for (let leftNode  of generateTree(from, i - 1)) {

          response.push(
            new TreeNode(
              i,
              leftNode,
              rightNode,
            )
          );

        }
      }
    }

    return response;
  }

  return generateTree(1, n);

}

console.log(generateTrees(2));
