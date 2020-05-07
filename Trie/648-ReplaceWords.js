class Trie {

  constructor() {
    this.trie = Object.create(null);
  }

  insert(word) {

    let node = this.trie;

    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }

    node.isWord = true;

  }

  search(word) {

    let node = this.trie;

    for (let i = 0; i < word.length; i++) {
      if (node[word[i]] && !node[word[i]].isWord) {
        node = node[word[i]];
        continue;
      }

      if (node[word[i]] && node[word[i]].isWord)
        return word.slice(0, i + 1);

      break;
    }

    return word;

  }

}

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = (dict, sentence) => {

  const trie = new Trie();

  for (let word of dict) {
    trie.insert(word);
  }

  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    // can be improved with HashMap
    words[i] = trie.search(words[i]);
  }

  return words.join(' ');

}

console.log(
  replaceWords(
    ['cat', 'bat', 'rat'],
    'the cattle was rattled by the battery'
  )
);
