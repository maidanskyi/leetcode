/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  if (!strs.length) return [];
  const map = new Map();

  // accepts string, returns key
  const hashFn = str => str.split('').sort().join('');
  const response = [];
  let length = response.length;

  for (const str of strs) {
    const index = map.get(hashFn(str));
    if (index + 1) {
      response[index].push(str);
    } else {
      map.set(hashFn(str), length);
      response[length] = [str];
      length++;
    }
  }

  return response;
}

/*
 [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
  ]
*/
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
