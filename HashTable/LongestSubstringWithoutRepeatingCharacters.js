/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {

  const length = s.length;
  if (length <= 1) return length;

  let substr_max_len = 0; // substring max length
  let substr_start_index = 0; // start counter from
  const map = new Map();

  for (let i = 0; i < length; i++) {
    const char_index = map.get(s[i]) + 1; // because char_index might be 0
    if (char_index) {
      const current_substr_len = i - substr_start_index;
      substr_max_len = current_substr_len > substr_max_len
        ? current_substr_len
        : substr_max_len;
      substr_start_index = char_index > substr_start_index
        ? char_index
        : substr_start_index;
    }
    map.set(s[i], i);
  }

  // when the input string has no duplicate characters
  if (substr_start_index !== length - 1)
    return substr_max_len > length - substr_start_index
      ? substr_max_len
      : length - substr_start_index;

  return substr_max_len;

}

// console.log(lengthOfLongestSubstring('abcabcbb')); // 3
// console.log(lengthOfLongestSubstring('bbbbb')); // 1
// console.log(lengthOfLongestSubstring('pwwkew')); // 3
// console.log(lengthOfLongestSubstring('')); // 0
// console.log(lengthOfLongestSubstring(' ')); // 1
// console.log(lengthOfLongestSubstring('helo wrd')); // 8
// console.log(lengthOfLongestSubstring('abba')); // 2
