/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {

  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  let response = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (!s[i+1] || map[s[i]] >= map[s[i+1]])
      response += map[s[i]];
    else
      response -= map[s[i]];
  }

  return response;

}

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
