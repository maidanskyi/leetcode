/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = (sentence, searchWord) => {

  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) return i + 1;
  }

  return -1;

}

console.log(isPrefixOfWord('i love eating burger', 'burg')); // 4
console.log(isPrefixOfWord('this problem is an easy problem', 'pro')); // 2
console.log(isPrefixOfWord('i am tired', 'you')); // -1
console.log(isPrefixOfWord('i use triple pillow', 'pill')); // 4
