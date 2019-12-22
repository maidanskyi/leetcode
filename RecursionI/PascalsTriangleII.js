/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {

  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  const response = [[1], [1, 1]];
  const fn = arr => {
    const newArr = [];
    for (let i = 0; i < arr[arr.length - 1].length - 1; i++) {
      newArr.push(arr[arr.length - 1][i] + arr[arr.length - 1][i+1]);
    }
    return newArr;
  }

  while (response.length !== rowIndex + 1) {
    response[response.length] = [1, ...fn(response), 1];
  }

  return response[rowIndex];

}
