/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const updateMatrix = (matrix) => {

  const fn = (i, j) => {

    const set = new Set([`${i}${j}`]);
    const queue = [{
      val: matrix[i][j],
      row: i,
      col: j,
      depth: 0,
    }];

    while (queue.length) {
      const el = queue.shift();

      if (el.val === 0) return el.depth;

      if (
        el.row + 1 < matrix.length && !set.has(`${el.row + 1}${el.col}`)
      ) {
        set.add(`${el.row + 1}${el.col}`);
        queue.push({
          val: matrix[el.row + 1][el.col],
          row: el.row + 1,
          col: el.col,
          depth: el.depth + 1,
        });
      }

      if (
        el.row - 1 >= 0 && !set.has(`${el.row - 1}${el.col}`)
      ) {
        set.add(`${el.row - 1}${el.col}`);
        queue.push({
          val: matrix[el.row - 1][el.col],
          row: el.row - 1,
          col: el.col,
          depth: el.depth + 1,
        });
      }

      if (
        el.col + 1 < matrix[0].length && !set.has(`${el.row}${el.col + 1}`)
      ) {
        set.add(`${el.row}${el.col + 1}`);
        queue.push({
          val: matrix[el.row][el.col + 1],
          row: el.row,
          col: el.col + 1,
          depth: el.depth + 1,
        });
      }

      if (
        el.col - 1 >= 0 && !set.has(`${el.row}${el.col - 1}`)
      ) {
        set.add(`${el.row}${el.col - 1}`);
        queue.push({
          val: matrix[el.row][el.col - 1],
          row: el.row,
          col: el.col - 1,
          depth: el.depth + 1,
        });
      }

    }

  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) continue;

      matrix[i][j] = fn(i, j);
    }
  }

  return matrix;

}

console.log(updateMatrix([[0,0,0], [0,1,0], [0,0,0]]));
console.log(updateMatrix([[0,0,0], [0,1,0], [1,1,1]]));
console.log(updateMatrix(
  [
    [1,1,0,0,1,0,0,1,1,0],
    [1,0,0,1,0,1,1,1,1,1],
    [1,1,1,0,0,1,1,1,1,0],
    [0,1,1,1,0,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,0,1,1,1],
    [0,1,1,1,1,1,1,0,0,1],
    [1,1,1,1,1,0,0,1,1,1],
    [0,1,0,1,1,0,1,1,1,1],
    [1,1,1,0,1,0,1,1,1,1]
  ]
));
