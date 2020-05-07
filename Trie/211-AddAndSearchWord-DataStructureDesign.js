/**
 * Initialize your data structure here.
 */
class WordDictionary {

  constructor() {
    this.trie = {};
  }

  /**
   * Adds a word into the data structure.
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this.trie;

    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }

    Object.defineProperty(node, 'isWord', {
      enumerable: false,
      writable: true,
      value: true,
    });

  }

  /**
   * Returns if the word is in the data structure.
   * A word could contain the dot character '.' to represent any one letter.
   * @param {string} word
   * @return {boolean}
   */
  search(word, node = this.trie) {

    for (let i = 0; i < word.length; i++) {
      if (word[i] === '.') {

        for (let childNode of Object.values(node)) {
          const res = this.search(word.slice(i+1), childNode);
          if (res) return true;
        }

      }
      if (!node[word[i]]) return false;
      node = node[word[i]];
    }

    return !!node.isWord;

  }

}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const trie = new WordDictionary();

trie.addWord('bad');
trie.addWord('dad');
trie.addWord('bar');

console.log(trie.search('.ad'));
