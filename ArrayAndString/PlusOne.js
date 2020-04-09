/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {

  const response = [];
  let s = 0;

  for (let i = digits.length - 1; i > -1; i--) {

    const oneZero = i === digits.length - 1 ? 1 : 0;

    if (!oneZero && !digits[i]) {
      response[i] = 0;
      s = 0;
      continue;
    }

    const arr = String((digits[i] + oneZero + s) / 10)
      .split('.')
      .map(Number);

    if (arr.length === 1 && arr[0] === 1) {
      arr.push(0);
    }

    response[i] = arr[1];
    s = arr[0];

  }

  return s ? [1, ...response] : response;

}

console.log(plusOne([1,2,3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([4, 9, 9, 9]));
console.log(plusOne([9]));
