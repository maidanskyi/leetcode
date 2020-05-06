/**
 * Initialize your data structure here.
 */
class MapSum {

  constructor() {
    this.trie = {};
  }

  /**
   * @param {string} key
   * @param {number} val
   * @return {void}
   */
  insert(key, val) {

    let node = this.trie;

    for (let char of key) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }

    if (node.val) {
      node.val = val;
      return;
    }

    Object.defineProperty(node, 'val', {
      enumerable: false,
      writable: true,
      value: val,
    });

  }

  /**
   * @param {string} prefix
   * @return {number}
   */
  sum(prefix) {

    let node = this.trie;

    // let's go through prefix to find the last node
    for (let char of prefix) {
      if (!node[char]) return 0;
      node = node[char];
    }

    return this.getSumForNode(node);

  }

  getSumForNode(node) {

    if (!node) return 0;
    const responses = [];
    const keys = Object.keys(node);

    for (let i = 0; i < keys.length; i++) {
      responses[i] = this.getSumForNode(node[keys[i]]);
    }

    if (typeof node.val !== 'undefined') responses.push(node.val);

    return responses.reduce((acc, curr) => acc + curr, 0);

  }

}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

const trie = new MapSum();

// console.log(trie.insert('apple', 3));
// console.log(trie.sum('ap')); // 3
// console.log(trie.insert('app', 2));
// console.log(trie.sum('ap')); // 5

console.log(trie.insert('aa', 3));
console.log(trie.sum('a')); // 3
console.log(trie.insert('aa', 2));
console.log(trie.sum('a')); // 5
