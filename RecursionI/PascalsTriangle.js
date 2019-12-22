/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRow => {

  if (numRow === 0) return [];
  if (numRow === 1) return [[1]];
  if (numRow === 2) return [[1], [1, 1]];

  const response = [[1], [1, 1]];
  const fn = arr => {
    const newArr = [];
    for (let i = 0; i < arr[arr.length - 1].length - 1; i++) {
      newArr.push(arr[arr.length - 1][i] + arr[arr.length - 1][i+1]);
    }
    return newArr;
  }

  while (response.length !== numRow) {
    response[response.length] = [1, ...fn(response), 1];
  }

  return response;

}
