/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = (people) => {
  const compare = ([h1, k1], [h2, k2]) => {
    if (h1 !== h2) return h2 - h1;
    else return k1 - k2;
  };
  people.sort(compare);

  const res = [];
  for (const p of people) {
    res.splice(p[1], 0, p);
  }
  return res;
}
