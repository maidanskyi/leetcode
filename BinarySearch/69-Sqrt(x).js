/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {

  let start  = 0;
  let end = x;
  let middle = Math.ceil((end + start) / 2);

  while (true) {

    if (middle*middle > x) {
      end = middle - 1;
      middle = Math.ceil((start + end) / 2);
      continue;
    }

    if (middle*middle < x) {
      if ((middle+1)*(middle+1) > x) {
        return middle;
      }

      start = middle + 1;
      middle = Math.ceil((start + end) / 2);
      continue;
    }

    return middle;

  }

}

console.log(mySqrt(8192));
