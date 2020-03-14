/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {

  const set = new Set(J);
  let response = 0;
  const length = S.length;

  for (let i = 0; i < length; i++) {
    if (set.has(S[i])) {
      response += 1;
    }
  }

  return response;

}

// console.log(numJewelsInStones('aA', 'aAAbbbb')); // 3
// console.log(numJewelsInStones('z', 'ZZ')); // 0
