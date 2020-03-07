/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {

  if (s === t) return true;

  const map = new Map();
  const set = new Set();
  const length = s.length;
  const response = [];

  for (let i = 0; i < length; i++) {
    if (!map.has(s[i]) && !set.has(t[i])) {
      map.set(s[i], t[i]);
      set.add(t[i]);
    }
  }

  for (let i = 0; i < length; i++) {
    if (!map.has(s[i])) return false;
    response.push(map.get(s[i]));
  }

  return response.join('') === t;

}

// console.log(isIsomorphic('ab', 'aa'));
// console.log(isIsomorphic('foo', 'bar'));
// console.log(isIsomorphic('egg', 'add'));
