/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = (envelopes) => {

  if (envelopes.length < 2) return envelopes.length;

  envelopes.sort(([w1,h1], [w2,h2]) => {
    if (w1 - w2 === 0)
      return h1 - h2;
    else
      return w1 - w2;
  });

  const containsDoll = ([w1, h1], [w2, h2]) => w1 > w2 && h1 > h2;
  const hash = new Array(envelopes.length).fill(1);

  for (let i = 1; i < envelopes.length; i++) {
    for (let j = i - 1; j >=0; j--) {
      if (containsDoll(envelopes[i], envelopes[j])) {
        hash[i] = Math.max(hash[i], hash[j] + 1);
      }
    }
  }

  return Math.max.apply(null, hash);

}

console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]])); // 3
console.log(maxEnvelopes([[46,89],[50,53],[52,68],[72,45],[77,81]])); // 3
console.log(maxEnvelopes([[1,1]])); // 1
