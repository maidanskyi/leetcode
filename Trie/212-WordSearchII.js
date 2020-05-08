/**
 * Initialize your data structure here.
 */
class Trie {

  constructor() {
    this.root = {};
  }

  insert(word) {

    let node = this.root;

    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }

  }

  startsWith(prefix, startNode = this.root) {

    for (let char of prefix) {
      if (!startNode[char]) return null;
      startNode = startNode[char];
    }

    return startNode;

  }

}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {

  const response = [];
  const set = new Set(words);
  const trie = new Trie();
  const fn = (
    i = 0,
    j = 0,
    prefix = '',
    visited,
    node = trie.root,
  ) => {

    const key = prefix + board[i][j];
    const foundNode = trie.startsWith(board[i][j], node);

    if (!foundNode) return;

    if (set.has(key)) {
      response.push(key);
      set.delete(key);
    }

    if (board[i - 1] && board[i - 1][j] && !visited[i - 1][j]) {
      visited[i][j] = true;
      fn(i - 1, j, key, visited, foundNode);
      visited[i][j] = false;
    }

    if (board[i + 1] && board[i + 1][j] && !visited[i + 1][j]) {
      visited[i][j] = true;
      fn(i + 1, j, key, visited, foundNode);
      visited[i][j] = false;
    }

    if (board[i] && board[i][j - 1] && !visited[i][j - 1]) {
      visited[i][j] = true;
      fn(i, j - 1, key, visited, foundNode);
      visited[i][j] = false;
    }

    if (board[i] && board[i][j + 1] && !visited[i][j + 1]) {
      visited[i][j] = true;
      fn(i, j + 1, key, visited, foundNode);
      visited[i][j] = false;
    }
  }

  for (let word of words) trie.insert(word);

  const backtrackingArray = board.map(arr => arr.map(() => false));

  theEnd: for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (!set.size) break theEnd;
      fn(i, j, '', backtrackingArray);
    }
  }

  return response;

}

console.log(findWords(
  [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
  ],
  ['oath','pea','eat','rain'],
)); // ["eat","oath"]

console.log(findWords(
  [
    ["b","a","a","b","a","b"],
    ["a","b","a","a","a","a"],
    ["a","b","a","a","a","b"],
    ["a","b","a","b","b","a"],
    ["a","a","b","b","a","b"],
    ["a","a","b","b","b","a"],
    ["a","a","b","a","a","b"]
  ],
  [
    "bbaabaabaaaaabaababaaaaababb",
    "aabbaaabaaabaabaaaaaabbaaaba",
    "babaababbbbbbbaabaababaabaaa",
    "bbbaaabaabbaaababababbbbbaaa",
    "babbabbbbaabbabaaaaaabbbaaab",
    "bbbababbbbbbbababbabbbbbabaa",
    "babababbababaabbbbabbbbabbba",
    "abbbbbbaabaaabaaababaabbabba",
    "aabaabababbbbbbababbbababbaa",
    "aabbbbabbaababaaaabababbaaba", // <--
    "ababaababaaabbabbaabbaabbaba", // <--
    "abaabbbaaaaababbbaaaaabbbaab", // <--
    "aabbabaabaabbabababaaabbbaab",
    "baaabaaaabbabaaabaabababaaaa",
    "aaabbabaaaababbabbaabbaabbaa",
    "aaabaaaaabaabbabaabbbbaabaaa",
    "abbaabbaaaabbaababababbaabbb",
    "baabaababbbbaaaabaaabbababbb",
    "aabaababbaababbaaabaabababab",
    "abbaaabbaabaabaabbbbaabbbbbb",
    "aaababaabbaaabbbaaabbabbabab",
    "bbababbbabbbbabbbbabbbbbabaa",
    "abbbaabbbaaababbbababbababba",
    "bbbbbbbabbbababbabaabababaab",
    "aaaababaabbbbabaaaaabaaaaabb",
    "bbaaabbbbabbaaabbaabbabbaaba",
    "aabaabbbbaabaabbabaabababaaa",
    "abbababbbaababaabbababababbb",
    "aabbbabbaaaababbbbabbababbbb",
    "babbbaabababbbbbbbbbaabbabaa"
  ],
)); // ["aabbbbabbaababaaaabababbaaba","abaabbbaaaaababbbaaaaabbbaab","ababaababaaabbabbaabbaabbaba"]
