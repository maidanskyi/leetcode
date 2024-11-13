/**
 * @param {number[][]} image
 * @param {number} row
 * @param {number} col
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = (image, row, col, newColor) => {

  const currColor = image[row][col];

  if (currColor === newColor) return image;

  const  fn = (r, c) => {

    if (
      r < 0
      || r > image.length - 1
      || c < 0
      || c > image[0].length - 1
      || image[r][c] !== currColor
    ) return;

    image[r][c] = newColor;

    fn(r - 1, c);
    fn(r + 1, c);
    fn(r, c - 1);
    fn(r, c + 1);

  }

  fn(row, col);

  return image;

}

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
console.log(floodFill([[0,0,0],[0,1,1]], 1, 1, 1));
