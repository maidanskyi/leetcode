/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = T => T.reduce(
  (acc, curr, index, arr) => {
    let step = 0;
    for (let i = index + 1; i < arr.length; i++) {
      if (arr[i] > curr) {
        step = i - index;
        break;
      } else {
        continue;
      }
    }
    acc.push(step);
    return acc;
  },
  [],
);
