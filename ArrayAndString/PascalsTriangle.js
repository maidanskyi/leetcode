/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {

  if (!numRows) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const response = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {

    const arr = [1];

    for (let j = 0; j < response[response.length - 1].length - 1; j++) {

      arr.push(
        response[response.length - 1][j] + response[response.length - 1][j + 1]
      );

    }
    arr.push(1);
    response.push(arr);

  }

  return response;

}

console.log(generate(0)); // []
/**
 * [
 *   [1],
 *   [1,1],
 *   [1,2,1],
 *   [1,3,3,1],
 *   [1,4,6,4,1]
 * ]
 */
console.log(generate(5));
