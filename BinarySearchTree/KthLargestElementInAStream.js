/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {

  constructor(k, nums) {
    this.k = k;
    this.bst = null;
    for (const el of nums) {
      this.addNode(el);
    }
  }

  /**
   * @param {number} val
   */
  addNode(val) {

    const addNodeToTree = node => {

      if (!node)
        return { val, count: 1, left: null, right: null };

      if (val < node.val)
        node.left = addNodeToTree(node.left);

      if (val > node.val)
        node.right = addNodeToTree(node.right);

      node.count++;
      return node;

    }

    this.bst = addNodeToTree(this.bst);

  }

  /**
   * @return {number}
   */
  getKthEl(node, k) {

    const leftCount = node.left ? node.left.count : 0;
    const rightCount = node.right ? node.right.count : 0;

    if (k <= rightCount) {
      return this.getKthEl(node.right, k);
    }

    if (k > rightCount && k <= node.count - leftCount) {
      return node.val;
    }

    return this.getKthEl(node.left, k - rightCount - (node.count - leftCount - rightCount));

  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.addNode(val);
    return this.getKthEl(this.bst, this.k);
  }

}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// const obj = new KthLargest(3, [4, 5, 8, 2]);
// console.log(obj.add(3)); // 4
// console.log(obj.add(5)); // 5
// console.log(obj.add(10)); // 5
// console.log(obj.add(9)); // 8
// console.log(obj.add(4)); // 8
//
// const obj_2 = new KthLargest(2, [0]);
// console.log(obj_2.add(-1)); // -1
// console.log(obj_2.add(1)); // 0
// console.log(obj_2.add(-1)); // 0
// console.log(obj_2.add(-4)); // 0
// console.log(obj_2.add(3)); // 1
