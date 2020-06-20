/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {

  if (!intervals.length) return intervals;

  intervals.sort((a, b) => {
    const val = a[0] - b[0];
    if (val === 0)
      return b[1] - a[1];
    else
      return val;
  });

  const response = [intervals[0]];

  let start = 1;

  while (start < intervals.length) {
    const to = response[response.length - 1][1];

    if (to < intervals[start][0])
      response.push(intervals[start]);
    else
      response[response.length - 1][1] = Math.max(to, intervals[start][1]);

    start++;
  }

  return response;

}

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // [[1,5]]
