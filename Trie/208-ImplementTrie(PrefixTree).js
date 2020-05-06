/**
 * Initialize your data structure here.
 */
class Trie {

  constructor() {
    this.trie = Object.create(null);
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {

    let node = this.trie;

    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }

    node.isWord = true;

  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {

    let node = this.trie;

    for (let char of word) {
      if (!node[char]) return false;
      node = node[char];
    }

    return !!node.isWord;

  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {

    let node = this.trie;

    for (let char of prefix) {
      if (!node[char]) return false;
      node = node[char];
    }

    return true;

  }

}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();

trie.insert('apple');
console.log(trie.search('apple')); // true;
console.log(trie.search('app')); // false;
console.log(trie.startsWith('app')); //true;
trie.insert('app');
console.log(trie.search('app')); // true;
