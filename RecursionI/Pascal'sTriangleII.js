/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {

  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  if (rowIndex === 2) return [1, 2, 1];

  let currentRow = 2;
  let arr = [1, 2, 1];

  while (currentRow !== rowIndex) {
    const res = [1];
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
      res.push(arr[i] + arr[i + 1]);
    }

    res.push(1);
    arr = res;
    currentRow++;
  }

  return arr;

}

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(33));
