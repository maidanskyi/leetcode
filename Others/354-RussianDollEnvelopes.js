/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = (envelopes) => {

  if (!envelopes.length) return 0;

  envelopes.sort(([w1,h1], [w2,h2]) => {
    if (w1 - w2 === 0)
      return h1 - h2;
    else
      return w1 - w2;
  });

  const containsDoll = ([w1, h1], [w2, h2]) => w1 > w2 && h1 > h2;
  const hash = new Array(envelopes.length).fill(1);

  for (let i = 1; i < envelopes.length; i++) {
    const values = [1];
    for (let j = i - 1; j >=0; j--) {
      if (containsDoll(envelopes[i], envelopes[j])) {
        values.push(hash[i] + hash[j]);
      }
    }
    hash[i] = Math.max.apply(null, values);
  }

  return Math.max.apply(null, hash);

}

// console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]])); // 3
console.log(maxEnvelopes([[46,89],[50,53],[52,68],[72,45],[77,81]])); // 3
