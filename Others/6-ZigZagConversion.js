/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {

  if (!s.length || numRows === 1) return s;

  const length = s.length;
  const arr = [];
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }
  const fillTopBottomVertically = (x, y, charPosition) => {
    while (x < numRows && charPosition < length) {
      arr[x][y] = s[charPosition];
      x++;
      charPosition++;
    }

    if (charPosition < length) fillBottomTopDiagonal(x - 2, y + 1, charPosition);
  }
  const fillBottomTopDiagonal = (x, y, charPosition) => {
    if (x === 0) return fillTopBottomVertically(x, y, charPosition);

    arr[x][y] = s[charPosition];
    charPosition++;
    x--;
    y++;

    if (charPosition < length) fillBottomTopDiagonal(x, y, charPosition);
  }

  fillTopBottomVertically(0, 0, 0);

  return arr.map(el => el.join('')).join('');

}

console.log(convert('PAYPALISHIRING', 2) === 'PYAIHRNAPLSIIG');
console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR');
console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI');
