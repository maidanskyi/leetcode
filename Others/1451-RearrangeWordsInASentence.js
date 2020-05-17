/**
 * @param {string} text
 * @return {string}
 */
const arrangeWords = (text) => {

  let words = text.split(' ');

  if (words.length === 1) return text;

  words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1);

  words = words.map((word, index) => ({
    text: word,
    length: word.length,
    index,
  }));

  words = words.sort((a, b) => {
    if (a.length === b.length) {
      return a.index - b.index;
    }

    return a.length - b.length;
  })
    .map(obj => obj.text);

  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

  return words.join(' ');

}

console.log(arrangeWords('Leetcode is cool')); // 'Is cool leetcode'
console.log(arrangeWords('Keep calm and code on')); // 'On and keep calm code'
console.log(arrangeWords('To be or not to be')); // 'To be or to be not'
console.log(arrangeWords('Jtik hrzrvhbmk gbo cfhmiqwonj ojkew ufvledv bomoeqt ops jgi zdhvbpbb zczmepdfpm jry rjazc titttcu'));
